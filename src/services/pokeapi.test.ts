import PokeApiService from './pokeapi';

describe('Poke api Service', () => {
  it('should respond 200', async () => {
    // Arrange
    const EXPECTED_STATUS = 200;

    // Action
    const result = await PokeApiService.healthCheck();

    // Asserts
    expect(result.status).toBe(EXPECTED_STATUS);
  }, 1000);

  it('WHEN find by ID "1" should respond bulbasaur', async () => {
    // Arrange
    const EXPECTED_POKEMON = {
      name: 'bulbasaur',
      types: [
        {
          slot: 1,
          type: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'},
        },
        {
          slot: 2,
          type: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'},
        },
      ],
    };

    // Action
    const result = await PokeApiService.getById(1);

    // Asserts
    expect(result.name).toEqual(EXPECTED_POKEMON.name);
    expect(result.types).toEqual(EXPECTED_POKEMON.types);
  }, 1000);

  it('WHEN find by limit "10" and offset "1" should respond 10 pokemons', async () => {
    // Arrange
    const PAGE_NUMBER = 10;
    const OFFSET = 1;
    const EXPECTED_RESULTS_LENGTH = 10;

    // Action
    const response = await PokeApiService.getPage(PAGE_NUMBER, OFFSET);

    // Asserts
    expect(response.results.length).toEqual(EXPECTED_RESULTS_LENGTH);
    expect(response.results[0]).toBeDefined()
    expect(response.results[0].name).toBeDefined()
    expect(response.results[0].url).toBeDefined()
  }, 1000);
});
