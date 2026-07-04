import { MockGroceryProvider } from './mockProviderFactory.js';
import { PROVIDERS } from '../utils/constants.js';

export const groceryApiProvider = new MockGroceryProvider({
  id: PROVIDERS.GROCERY_API,
  name: 'Grocery API',
  logoUrl: '/logos/groceryapi.svg'
});
