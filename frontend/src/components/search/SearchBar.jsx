import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch.js';
import { Suggestions } from './Suggestions.jsx';

export function SearchBar({ initialQuery = '' }) {
  const navigate = useNavigate();
  const { query, setQuery, suggestions, setSuggestions } = useSearch(initialQuery);

  const submit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    setSuggestions([]);
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={submit} className="relative">
      <div className="flex rounded-lg border border-line bg-white p-2 shadow-sm focus-within:border-mint">
        <div className="grid w-11 place-items-center text-muted">
          <Search className="h-5 w-5" />
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search milk, bread, rice, oil, atta..."
          className="min-w-0 flex-1 border-0 bg-transparent px-1 py-3 outline-none"
        />
        <button className="rounded-lg bg-mint px-5 py-2 font-semibold text-white hover:bg-emerald-700">Search</button>
      </div>
      <Suggestions
        suggestions={suggestions}
        onSelect={(value) => {
          setQuery(value);
          setSuggestions([]);
          navigate(`/search?q=${encodeURIComponent(value)}`);
        }}
      />
    </form>
  );
}
