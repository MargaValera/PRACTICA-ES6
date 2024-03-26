const img = document.querySelector('.random-image')

async function randomPokeImage() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' +
        (Math.floor(Math.random() * 151) + 1)
    )
    const pokemon = await response.json()
    img.src = pokemon.sprites.other.dream_world.front_default
  } catch (error) {
    console.error('error fetching pokemon data:', error)
  }
}

randomPokeImage()

// const img = document.querySelector('.random-image')

// fetch(
//   'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 151) + 1)
// )
//   .then((res) => res.json())
//   .then(
//     (pokemon) => (img.src = pokemon.sprites.other.dream_world.front_default)
//   )
