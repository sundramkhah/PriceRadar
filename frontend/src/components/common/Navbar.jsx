import { Heart, LogOut, Search, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice.js';
import { useAuth } from '../../hooks/useAuth.js';

export function Navbar() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-mint text-white">
            <Search className="h-5 w-5" />
          </span>
          <span>PriceWise Grocery</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <NavLink to="/wishlist" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-muted hover:bg-slate-100 hover:text-ink">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Wishlist</span>
          </NavLink>
          {user ? (
            <>
              <NavLink to="/profile" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-muted hover:bg-slate-100 hover:text-ink">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user.name}</span>
              </NavLink>
              <button onClick={() => dispatch(logout())} className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-slate-100 hover:text-ink" title="Log out">
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <Link to="/login" className="rounded-lg bg-ink px-4 py-2 font-medium text-white hover:bg-slate-700">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
