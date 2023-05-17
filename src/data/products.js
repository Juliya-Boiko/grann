import { nanoid } from 'nanoid';

export const products = [
  {
    id: nanoid(),
    type: 'pies',
    name: 'Мусовий торт “Манго-маракуйя”',
    weight: 3,
    price: 1200,
    descr: '',
    amountOfOrders: 310,
    imgUrl: 'mango'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Шоколадний торт з малиною',
    weight: 2,
    price: 1000,
    descr: '',
    amountOfOrders: 90,
    imgUrl: 'chok'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Ківі-маракуйя”',
    weight: 1.5,
    price: 1100,
    descr: '',
    amountOfOrders: 120,
    imgUrl: 'kiwi'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Снікерс”',
    weight: 3,
    price: 1400,
    descr: '',
    amountOfOrders: 200,
    imgUrl: 'snickers'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Наполеон”',
    weight: 2,
    price: 1000,
    descr: '',
    amountOfOrders: 80,
    imgUrl: 'napoleon'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Тіраміссу”',
    weight: 2,
    price: 1350,
    descr: '',
    amountOfOrders: 170,
    imgUrl: 'tiramisu'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Медовик”',
    weight: 1.5,
    price: 800,
    descr: '',
    amountOfOrders: 210,
    imgUrl: 'honey'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Вафельно-горіховий”',
    weight: 2,
    price: 1000,
    descr: '',
    amountOfOrders: 140,
    imgUrl: 'nuts'
  },
  {
    id: nanoid(),
    type: 'pies',
    name: 'Торт “Фісташка-малина”',
    weight: 2,
    price: 1350,
    descr: '',
    amountOfOrders: 190,
    imgUrl: 'pistachio'
  },

  {
    id: nanoid(),
    type: 'cakes',
    name: 'Шоколадне тістечко брауні',
    price: 300,
    descr: '',
    amount: 3,
    amountOfOrders: 300,
    imgUrl: 'browni'
  },

  {
    id: nanoid(),
    type: 'shoo',
    name: 'Тістечка Шу”',
    price: 400,
    descr: '',
    amount: 6,
    amountOfOrders: 290,
    imgUrl: 'shoo'
  },
];