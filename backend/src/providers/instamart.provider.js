import { MockGroceryProvider } from './mockProviderFactory.js';
import { PROVIDERS } from '../utils/constants.js';

export const instamartProvider = new MockGroceryProvider({
  id: PROVIDERS.INSTAMART,
  name: 'Instamart',
  logoUrl: '/logos/instamart.svg'
});
