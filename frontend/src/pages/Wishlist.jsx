import { ExternalLink, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/common/EmptyState.jsx';
import { Loader } from '../components/common/Loader.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { loadWishlist, removeWishlistItem } from '../store/wishlistSlice.js';
import { formatPrice } from '../utils/formatPrice.js';

export function Wishlist() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { items, loading } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (user) dispatch(loadWishlist());
  }, [dispatch, user]);

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <EmptyState title="Login required" description="Create an account or login to save products to your wishlist." />
        <Link to="/login" className="mt-5 inline-block rounded-lg bg-ink px-5 py-2 font-semibold text-white">Login</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-ink">Wishlist</h1>
      <div className="mt-5 space-y-3">
        {loading && <Loader label="Loading wishlist" />}
        {!loading && items.length === 0 && <EmptyState title="No saved products" description="Save products from search results to track your best deals." />}
        {items.map((item) => (
          <div key={item.productKey} className="grid gap-4 rounded-lg border border-line bg-white p-4 sm:grid-cols-[80px_1fr_auto] sm:items-center">
            <img src={item.imageUrl} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <h2 className="font-semibold text-ink">{item.name}</h2>
              <p className="text-sm text-muted">{item.provider} • {formatPrice(item.bestPrice)}</p>
            </div>
            <div className="flex gap-2">
              <a href={item.productUrl} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white" title="Buy now">
                <ExternalLink className="h-4 w-4" />
              </a>
              <button onClick={() => dispatch(removeWishlistItem(item.productKey))} className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted hover:text-coral" title="Remove">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
