import { SearchX } from 'lucide-react';

export function EmptyState({ title = 'No results found', description = 'Try a different grocery name or remove filters.' }) {
  return (
    <div className="rounded-lg border border-dashed border-line bg-white p-10 text-center">
      <SearchX className="mx-auto mb-3 h-10 w-10 text-muted" />
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{description}</p>
    </div>
  );
}
