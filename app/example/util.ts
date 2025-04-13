export interface Pokemon {
  name: string
  url: string
}

export interface PokemonData {
  [key: number]: Pokemon
}

export async function getPokemonData(): Promise<PokemonData> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const { results } = await res.json()

  return Object.fromEntries(
    (results as Pokemon[]).map((data, index) => [index + 1, data]),
  )
}

export function getPokemonOfficialArtworkUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}
