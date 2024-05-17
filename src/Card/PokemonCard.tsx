/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import { useSelector } from 'react-redux'
import styles from './PokemonCard.module.css'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import { usePokemonsDetail, PokemonDetailType } from '../hooks/usePokemons'
import { RootState } from '../Store'

interface PokeCardProps {
  name: string
}

export default function PokemonCard({ name }: PokeCardProps) {
  const imageType = useSelector((state: RootState) => state.imageType.type)
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetailType | null>(null)

  const [ref, { entry }] = useIntersectionObserver()
  const isVisible = entry && entry.isIntersecting

  useEffect(() => {
    if (!isVisible) return
    ;(async () => {
      const res = await usePokemonsDetail(name)
      setPokemonInfo(res)
    })()
  }, [name, isVisible])

  if (pokemonInfo === null) {
    return (
      <div className={styles.pokemonCard} ref={ref}>
        <CardHeader name={'포켓몬'} id={0} />
        <CardContent isLoading />
        <CardFooter />
      </div>
    )
  }

  return (
    <Link to={`/pokemon/${name}`} ref={ref}>
      <div className={styles.pokemonCard}>
        <CardHeader name={pokemonInfo.koreaName} id={pokemonInfo.id} />
        <CardContent imgSrc={pokemonInfo.images[imageType]} />
        <CardFooter />
      </div>
    </Link>
  )
}
