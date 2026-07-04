export function ProductImage({ src, alt }) {
  return (
    <div className="aspect-square overflow-hidden rounded-lg bg-slate-100">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}
