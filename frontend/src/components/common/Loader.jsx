export function Loader({ label = 'Loading' }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-line bg-white p-6 text-sm text-muted">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-mint border-t-transparent" />
      {label}
    </div>
  );
}
