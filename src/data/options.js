import { nanoid } from "nanoid";

export const options = {
  types: {
    label: 'Вид',
    options: [
      {
        id: nanoid(),
        title: 'Ванільний'
      },
      {
        id: nanoid(),
        title: 'Карамельний'
      },
      {
        id: nanoid(),
        title: 'Безлактозний'
      },
      {
        id: nanoid(),
        title: 'Без цукру'
      },
      {
        id: nanoid(),
        title: 'Без глютену та цукру'
      },
    ]
  },
  weights: {
    label: 'Вага готового виробу',
    options: [
      {
        id: nanoid(),
        title: '0.5 кг',
        value: 0.5
      },
      {
        id: nanoid(),
        title: '1 кг',
        value: 1
      },
      {
        id: nanoid(),
        title: '1.5 кг',
        value: 1.5
      },
      {
        id: nanoid(),
        title: '2 кг',
        value: 2
      },
      {
        id: nanoid(),
        title: '2.5 кг',
        value: 2.5
      },
      {
        id: nanoid(),
        title: '3 кг',
        value: 3
      },
    ]
  },
  decor: {
    label: 'Декор',
    options: [
      {
        id: nanoid(),
        title: 'Без декору',
        value: 0
      },
      {
        id: nanoid(),
        title: 'Ягоди',
        value: 200,
      },
      {
        id: nanoid(),
        title: 'Карамель',
        value: 300,
      },
    ]
  }
};