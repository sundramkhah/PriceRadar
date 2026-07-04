import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-ink">Page not found</h1>
      <Link to="/" className="mt-5 inline-block rounded-lg bg-mint px-5 py-2 font-semibold text-white">Go home</Link>
    </div>
  );
}
