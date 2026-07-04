import { Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth.js';
import { addWishlistItem } from '../../store/wishlistSlice.js';
import { formatPrice } from '../../utils/formatPrice.js';
import { ProductImage } from './ProductImage.jsx';
import { PriceComparison } from './PriceComparison.jsx';

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const addToWishlist = () => {
    if (!user || !product.bestOffer) return;
    dispatch(
      addWishlistItem({
        productKey: product.productKey,
        name: product.name,
        imageUrl: product.imageUrl,
        bestPrice: product.bestOffer.price,
        provider: product.bestOffer.providerName,
        productUrl: product.bestOffer.productUrl
      })
    );
  };

  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[170px_1fr]">
        <ProductImage src={product.imageUrl} alt={product.name} />
        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase text-muted">{product.category} • {product.quantity}</p>
              <h2 className="mt-1 text-xl font-semibold text-ink">{product.name}</h2>
              <p className="mt-1 text-sm text-muted">{product.brand}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-muted">Lowest price</p>
                <p className="text-2xl font-bold text-mint">{formatPrice(product.bestOffer?.price)}</p>
              </div>
              <button
                onClick={addToWishlist}
                className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted hover:border-coral hover:text-coral disabled:opacity-40"
                disabled={!user}
                title={user ? 'Add to wishlist' : 'Login to save'}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <PriceComparison offers={product.offers} />
          </div>
        </div>
      </div>
    </article>
  );
}
