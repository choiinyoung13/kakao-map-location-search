/* eslint-disable prettier/prettier */
import axios from 'axios'

// 포켓몬 목록 가져오기 'https://pokeapi.co/api/v2/pokemon'
// 포켓몬 상세정보 가져오기 'https://pokeapi.co/api/v2/pokemon/${name}'
// 포켓몬 한글이름 가져오기 'https://pokeapi.co/api/v2/pokemon-species/${name}'

export interface PokemonListResponseType {
  count: number,
  next: string,
  results: {
    name: string,
    url: string
  }[]
}

export async function usePokemons(next?:string) {
  const POKEMON_API = next || 'https://pokeapi.co/api/v2/pokemon'
  const res = await axios.get<PokemonListResponseType>(POKEMON_API)
  return res.data
}

export interface PokemonDetailResponseType {
  id: number,
  name: string,
  types: {
    type: {
      name: string
    }
  }[],
  height: number,
  weight: number,
  sprites: {
    front_default: string,
    other: {
      dream_world: {
        front_default: string,
      }
      "official-artwork": {
        front_default: string,
      }
    }
  }
  stats: {
    base_stat: number,
    stat: {
      name: string,
    }
  }[]
}

export interface PokemonDetailType {
  id: number
  name: string,
  types: string[],
  weight: number,
  height: number,
  images: {
    frontDefault: string,
    dreamWorldFront: string,
    officialArtworkFront: string,
  }
 baseStats: {
  name: string,
  value: number,
 }[]
 color: string,
 koreaName: string
}

export interface PokemonSpeciesResponseType {
  color: {name: string},
  names: {
    name: string,
    language: {
      name: string      
    }
  }[]
}



export async function usePokemonsDetail(name: string | undefined):Promise<PokemonDetailType> {
  const POKEMON_DETAIL_API = `https://pokeapi.co/api/v2/pokemon/${name}`
  const POKEMON_SPECIES_API = `https://pokeapi.co/api/v2/pokemon-species/${name}`

  const res = await axios.get<PokemonDetailResponseType>(POKEMON_DETAIL_API)
  const speciesRes = await axios.get<PokemonSpeciesResponseType>(POKEMON_SPECIES_API)
  
  const speciesDetail = speciesRes.data
  const detail = res.data

  return {
    id: detail.id,
    name: detail.name,
    types: detail.types.map(item=> item.type.name),
    height: detail.height / 10,
    weight: detail.weight / 10,
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront: detail.sprites.other['official-artwork'].front_default
    },
    baseStats: detail.stats.map(item=>{
      return {
        name: item.stat.name,
        value: item.base_stat,
      }
    }),
    color: speciesDetail.color.name,
    koreaName: speciesDetail.names.find(item=>{return item.language.name ==='ko'})?.name ?? detail.name,
  }
}

