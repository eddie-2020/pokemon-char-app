import { counter } from "../Display/counter";

describe('This is to check the lenght of all pokemons on our list', () => {
  test('Six pokemons', () => {
      const allPokemons = [
          {
              name: 'Coalana',
              id: 20
          },
          {
              name: 'Dangano',
              id: 40
          },
          {
              name: 'Chitaria',
              id: 60
          },
          {
              name: 'Jangaro',
              id: 80
          },
          {
              name: 'Elephanta',
              id: 100
          },
          {
              name: 'jangoro',
              id: 110
          }
      ];

      expect(counter(allPokemons)).toBe(6);
  });

  test('Empty pokemon', () => {
    const allPokemons = [];

    expect(counter(allPokemons)).toBe(0);
  });

  test('1 pokemon in the list', () => {
      const allPokemons = [
          {
              name: 'Coalana',
              id: 20
          },
      ];

      expect(counter(allPokemons)).toBe(1);
  });
});

test('2 pokemon length if true or false', () => {
    const allPokemons = [
        {
            name: 'Coalana',
            id: 20
        },
        {
            name: 'Jangoro',
            id: 30
        }
    ];
   expect(counter(allPokemons) === 2).toBeTruthy();
});

test('4 pokemon length if equal to a number', () => {
    const allPokemons = [
        {
            name: 'Coalana',
            id: 20
        },
        {
            name: 'Jangoro',
            id: 30
        },
        {
            name: 'Elephata',
            id: 40
        }
    ];
   expect(counter(allPokemons)).toEqual(3);
});