## Pokedex
You can use any package to manage the network state, for your confort `redux` and `react-query` are already installed

### List the pokemons
Create a **paginated** table containing the pokemons from the pokedex
Each row of the table must contain
1. name of the pokemon
2. types (grass, fire, etc...)

### Find a pokemon
Add an input to filter the list by name. 
Please note that the API provides no search method, which means the filtering method must be run on the front-end, on the result from `/pokemon` endpoint, making sure we get all the pokemons and not the limited results.

### Sort the pokemon
Add a way to sort the pokemon in ascending/descending order

## Resources
See [pokeapi](https://pokeapi.co/ "pokeapi")

You will rely on the pokeAPI which requires no authentication:
- `https://pokeapi.co/api/v2/pokemon?limit=20&offset=20` to retrieve the N pokemon from O offset
- `https://pokeapi.co/api/v2/pokemon/bulbasaur ` or `https://pokeapi.co/api/v2/pokemon/1` to retrieve a given pokemon (here bulbasaur)

