import { ExternalLink } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice.js';
import { BestPriceBadge } from './BestPriceBadge.jsx';

export function PriceComparison({ offers }) {
  const lowest = offers.find((offer) => offer.available);

  return (
    <div className="space-y-2">
      {offers.map((offer) => {
        const isBest = lowest?.providerProductId === offer.providerProductId;
        return (
          <div key={offer.providerProductId} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-line bg-slate-50 p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <img src={offer.providerLogoUrl} alt="" className="h-6 w-6 rounded" />
                <span className="font-medium text-ink">{offer.providerName}</span>
                {isBest && <BestPriceBadge />}
              </div>
              <p className="mt-1 text-xs text-muted">{offer.available ? `Available • ${offer.deliveryEta}` : 'Currently unavailable'}</p>
            </div>
            <div className="text-right">
              <div className="font-semibold text-ink">{formatPrice(offer.price)}</div>
              <div className="text-xs text-muted line-through">{formatPrice(offer.mrp)}</div>
            </div>
            <a
              href={offer.productUrl}
              target="_blank"
              rel="noreferrer"
              className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-50 sm:col-span-1"
            >
              Buy Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
