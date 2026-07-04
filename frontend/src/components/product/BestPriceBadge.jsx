import { BadgeCheck } from 'lucide-react';

export function BestPriceBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2.5 py-1 text-xs font-semibold text-white">
      <BadgeCheck className="h-3.5 w-3.5" />
      Best deal
    </span>
  );
}
