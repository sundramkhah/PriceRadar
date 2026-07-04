export function Suggestions({ suggestions, onSelect }) {
  if (!suggestions.length) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-lg border border-line bg-white shadow-soft">
      {suggestions.map((item) => (
        <button
          type="button"
          key={`${item.label}-${item.brand}`}
          onClick={() => onSelect(item.label)}
          className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-slate-50"
        >
          <img src={item.imageUrl} alt="" className="h-10 w-10 rounded object-cover" />
          <span>
            <span className="block text-sm font-medium text-ink">{item.label}</span>
            <span className="block text-xs text-muted">{item.brand} • {item.category}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
