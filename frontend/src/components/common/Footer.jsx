export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>PriceWise Grocery compares prices and redirects purchases to original providers.</span>
        <span>Built with MERN, provider connectors, caching, and JWT auth.</span>
      </div>
    </footer>
  );
}
