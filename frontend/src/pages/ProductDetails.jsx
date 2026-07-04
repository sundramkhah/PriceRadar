import { Link } from 'react-router-dom';

export function ProductDetails() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-2xl font-semibold text-ink">Product details are comparison-first</h1>
      <p className="mt-3 text-muted">Select a product from search results to compare offers and continue to the provider page.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-mint px-5 py-2 font-semibold text-white">Search products</Link>
    </div>
  );
}
