import { MockGroceryProvider } from './mockProviderFactory.js';
import { PROVIDERS } from '../utils/constants.js';

export const bigbasketProvider = new MockGroceryProvider({
  id: PROVIDERS.BIGBASKET,
  name: 'BigBasket',
  logoUrl: '/logos/bigbasket.svg'
});
