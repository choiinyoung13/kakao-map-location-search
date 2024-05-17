/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import styles from './PokemonDetail.module.css'
import Devider from '../Common/Devider'
import PokemonInfo from './PokemonInfo'
import { usePokemonsDetail, PokemonDetailType } from '../hooks/usePokemons'
import { RootState } from '../Store'

export default function PokemonDetail() {
  const { name } = useParams()
  const [pokemoninfo, setPokemonInfo] = useState<PokemonDetailType | null>(null)
  const imageType = useSelector((state: RootState) => state.imageType.type)

  useEffect(() => {
    ;(async () => {
      const res = await usePokemonsDetail(name)
      setPokemonInfo(res)
    })()
  }, [])

  if (pokemoninfo === null) {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <FaQuestion size={300} style={{ margin: '180px 0' }} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={pokemoninfo?.images[imageType]} alt={'pokemon'} />
      </div>
      <Devider />
      <PokemonInfo
        title={'기본 정보'}
        name={pokemoninfo.koreaName}
        id={pokemoninfo.id}
        types={pokemoninfo.types}
        weight={pokemoninfo.weight}
        height={pokemoninfo.height}
      />
      <PokemonInfo title={'능력치'} baseStats={pokemoninfo.baseStats} />
    </div>
  )
}
