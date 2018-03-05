const stocks = [
  {
    'id': 1,
    'name': 'BMW',
    'price': 6
  },
  {
    'id': 2,
    'name': 'Google',
    'price': 26
  },
  {
    'id': 3,
    'name': 'Apple',
    'price': 100
  },
  {
    'id': 4,
    'name': 'Twitter',
    'price': 28
  }
];

const portfolio = {
  'stockPortfolio': [
    {
      'id': 1,
      'name': 'BMW',
      'price': 6,
      'quantity': '01'
    },
    {
      'id': 2,
      'name': 'Google',
      'price': 26,
      'quantity': 2
    },
    {
      'id': 3,
      'name': 'Apple',
      'price': 100,
      'quantity': 3
    }
  ],
  'funds': 5000
};

export default {
  stocks,
  portfolio
};
