import { SlidersHorizontal } from 'lucide-react';
import { PROVIDERS, SORT_OPTIONS } from '../../utils/constants.js';

export function Filters({ filters, onChange }) {
  return (
    <section className="rounded-lg border border-line bg-white p-4">
      <div className="mb-4 flex items-center gap-2 font-semibold text-ink">
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Store</span>
          <select value={filters.provider} onChange={(event) => onChange({ provider: event.target.value })} className="w-full rounded-lg border border-line bg-white px-3 py-2">
            {PROVIDERS.map((provider) => (
              <option key={provider.id} value={provider.id}>{provider.label}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Sort</span>
          <select value={filters.sort} onChange={(event) => onChange({ sort: event.target.value })} className="w-full rounded-lg border border-line bg-white px-3 py-2">
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex items-end gap-2 rounded-lg text-sm text-muted">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) => onChange({ availableOnly: event.target.checked })}
            className="mb-3 h-4 w-4 accent-mint"
          />
          <span className="pb-2">Available products only</span>
        </label>
      </div>
    </section>
  );
}
