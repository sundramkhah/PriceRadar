export const catalog = [
  {
    id: 'milk-amul-1l',
    name: 'Amul Taaza Toned Milk',
    brand: 'Amul',
    category: 'Dairy',
    quantity: '1 L',
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80',
    keywords: ['milk', 'amul', 'dairy']
  },
  {
    id: 'bread-harvest-400g',
    name: 'Harvest Gold White Bread',
    brand: 'Harvest Gold',
    category: 'Bakery',
    quantity: '400 g',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
    keywords: ['bread', 'bakery']
  },
  {
    id: 'rice-daawat-5kg',
    name: 'Daawat Rozana Basmati Rice',
    brand: 'Daawat',
    category: 'Staples',
    quantity: '5 kg',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80',
    keywords: ['rice', 'basmati', 'staples']
  },
  {
    id: 'oil-fortune-1l',
    name: 'Fortune Sunflower Oil',
    brand: 'Fortune',
    category: 'Cooking Oil',
    quantity: '1 L',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80',
    keywords: ['oil', 'sunflower', 'cooking']
  },
  {
    id: 'atta-aashirvaad-5kg',
    name: 'Aashirvaad Superior MP Atta',
    brand: 'Aashirvaad',
    category: 'Staples',
    quantity: '5 kg',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
    keywords: ['atta', 'wheat', 'flour']
  },
  {
    id: 'eggs-farm-12',
    name: 'Farm Fresh Eggs',
    brand: 'Farm Fresh',
    category: 'Protein',
    quantity: '12 pcs',
    imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=500&q=80',
    keywords: ['eggs', 'protein']
  }
];

export const providerPrices = {
  blinkit: { baseUrl: 'https://blinkit.com/search?q=', multipliers: [1.0, 1.04, 0.97, 1.02, 0.98, 1.01], eta: '10 min' },
  instamart: { baseUrl: 'https://www.swiggy.com/instamart/search?query=', multipliers: [1.03, 0.99, 1.01, 0.96, 1.02, 1.04], eta: '14 min' },
  bigbasket: { baseUrl: 'https://www.bigbasket.com/ps/?q=', multipliers: [0.98, 1.02, 0.99, 1.03, 0.97, 1.0], eta: '2 hrs' },
  groceryapi: { baseUrl: 'https://example.com/grocery/search?q=', multipliers: [1.01, 0.98, 1.02, 1.0, 1.03, 0.96], eta: 'Same day' }
};

export const basePrices = [68, 48, 520, 142, 245, 92];
