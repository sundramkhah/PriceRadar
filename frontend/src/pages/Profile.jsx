import { useAuth } from '../hooks/useAuth.js';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-lg border border-line bg-white p-6">
        <h1 className="text-2xl font-semibold text-ink">Profile</h1>
        <dl className="mt-5 grid gap-4 text-sm">
          <div>
            <dt className="text-muted">Name</dt>
            <dd className="font-medium text-ink">{user?.name || 'Guest'}</dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="font-medium text-ink">{user?.email || 'Not logged in'}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
