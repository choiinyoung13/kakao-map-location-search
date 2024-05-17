/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-array-index-key */
import { useEffect, useRef, useState } from 'react'
import styles from './PokemonCardList.module.css'
import PokemonCard from '../Card/PokemonCard'
import { PokemonListResponseType, usePokemons } from '../hooks/usePokemons'
import loadingIcon from '../assets/ball-triangle.svg'

export default function PokemonCardList() {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next: '',
    results: [],
  })

  const loadingRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await usePokemons()
      setPokemons(res)
    })()
  }, [])

  useEffect(() => {
    const option = { threshold: 1 }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        ;(async () => {
          const res = await usePokemons(pokemons.next)
          setPokemons({
            ...res,
            results: [...pokemons.results, ...res.results],
          })
        })()
      }
    }, option)

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }
  }, [pokemons])

  return (
    <>
      <div className={styles.pokemonCardList}>
        {pokemons.results.map((pokemon, idx) => {
          return <PokemonCard key={`${pokemon.name}_${idx}`} name={pokemon.name} />
        })}
      </div>
      <div className={styles.loadingIcon}>
        <img src={loadingIcon} alt={''} ref={loadingRef} />
      </div>
    </>
  )
}
