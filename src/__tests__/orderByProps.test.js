import orderByProps from '../js/orderByProps';

it('Функция должна возвращать корректные значения', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const orderSort = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, orderSort);
  expect(received).toEqual(result);
});

it('Функция не должна обрабатывать свойства из прототипов других объектов', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  Object.defineProperty(obj, 'blablabla', {
    __proto__: null,
    value: 'blabla',
  });
  const orderSort = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, orderSort);
  expect(received).toEqual(result);
});

it('Функция не должна быть равна полученным результатам', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const orderSort = ['name', 'level'];
  const result = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
  ];
  const received = orderByProps(obj, orderSort);
  expect(received).not.toEqual(result);
});

it('Если в параметр функции не передано значение объекта, то функция ничего не возвращает', () => {
  const received = orderByProps();
  expect(received).toBeFalsy();
});
