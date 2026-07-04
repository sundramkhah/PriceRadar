import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { EmptyState } from '../components/common/EmptyState.jsx';
import { Loader } from '../components/common/Loader.jsx';
import { ProductCard } from '../components/product/ProductCard.jsx';
import { Filters } from '../components/search/Filters.jsx';
import { SearchBar } from '../components/search/SearchBar.jsx';
import { searchProducts } from '../store/productSlice.js';

export function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const dispatch = useDispatch();
  const { items, meta, loading, error } = useSelector((state) => state.products);
  const [filters, setFilters] = useState({ sort: 'best', provider: 'all', availableOnly: false, page: 1 });

  const searchParams = useMemo(
    () => ({ q: query, sort: filters.sort, provider: filters.provider, availableOnly: filters.availableOnly, page: filters.page }),
    [query, filters]
  );

  useEffect(() => {
    if (query) dispatch(searchProducts(searchParams));
  }, [dispatch, query, searchParams]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-5">
        <SearchBar initialQuery={query} />
      </div>
      <Filters filters={filters} onChange={(patch) => setFilters((current) => ({ ...current, ...patch, page: 1 }))} />

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
          <span>{meta ? `${meta.total} matched product groups for "${query}"` : `Search results for "${query}"`}</span>
          {meta?.cache && <span className="rounded-full bg-white px-3 py-1">Cache: {meta.cache}</span>}
        </div>
        {loading && <Loader label="Comparing live provider offers" />}
        {error && <EmptyState title="Unable to load prices" description={error} />}
        {!loading && !error && items.length === 0 && <EmptyState />}
        {!loading && !error && items.map((product) => <ProductCard key={product.productKey} product={product} />)}
      </div>
    </div>
  );
}
