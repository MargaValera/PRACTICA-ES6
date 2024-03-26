fetch('https://pokeapi.co/api/v2/pokemon/23')
  .then((res) => res.json())
  .then((res) => console.log(res))
