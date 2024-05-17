import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ChangeEvent } from 'react'
import styles from './PageHeader.module.css'
import { POKEMON_IMAGE_TYPE } from '../Constants'
import { RootState, useAppDispatch } from '../Store/index'
import { PokemonImageKeyType, changeImageType } from '../Store/imageTypeSlice'

export default function PageHeader() {
  const type = useSelector((state: RootState) => state.imageType.type)
  const dispatch = useAppDispatch()
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeImageType({
        type: e.target.value as PokemonImageKeyType,
      }),
    )
  }

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.link}>
        <div className={styles.title}>{'Pokémon'}</div>
      </Link>
      <select className={styles.hedearOption} value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFCIAL_ARTWORK}>{'Official'}</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>{'DreamWorld'}</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>{'FrontDefault'}</option>
      </select>
    </header>
  )
}
