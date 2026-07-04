import { useEffect, useState } from 'react';
import { productService } from '../services/product.service.js';
import { useDebounce } from './useDebounce.js';

export const useSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState([]);
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    let active = true;
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return undefined;
    }

    productService
      .suggestions(debouncedQuery)
      .then((response) => active && setSuggestions(response.data))
      .catch(() => active && setSuggestions([]));

    return () => {
      active = false;
    };
  }, [debouncedQuery]);

  return { query, setQuery, suggestions, setSuggestions };
};
