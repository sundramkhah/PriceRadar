import { MockGroceryProvider } from './mockProviderFactory.js';
import { PROVIDERS } from '../utils/constants.js';

export const blinkitProvider = new MockGroceryProvider({
  id: PROVIDERS.BLINKIT,
  name: 'Blinkit',
  logoUrl: '/logos/blinkit.svg'
});
