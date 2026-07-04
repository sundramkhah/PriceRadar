import { SearchBar } from '../components/search/SearchBar.jsx';

export function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-mint">Grocery price intelligence</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Compare grocery prices before you buy.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Search once and compare normalized offers across Blinkit, Instamart, BigBasket, and future grocery connectors.
          </p>
          <div className="mt-6 max-w-2xl">
            <SearchBar />
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
            alt="Fresh groceries on shelves"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        </div>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ['Parallel providers', 'Every search fans out to available connectors in parallel.'],
          ['Smart matching', 'Similar products are grouped using normalized names and quantities.'],
          ['Best deal first', 'Available lowest-price offers are highlighted for quick decisions.']
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-line bg-white p-5">
            <h2 className="font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
