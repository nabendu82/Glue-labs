const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async () => {
    for(let i=1; i<=pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()
    createPokemonCard(data);
}

const createPokemonCard = pokemon => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const id = pokemon.id;
    const name = pokemon.name;
    const sprites = pokemon.sprites;
    const types = pokemon.types;
    const type = types[0].type.name;
    const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

fetchPokemons();