import styles from './CardFooter.module.css'
import PokemonSticker from '../Common/PokemonSticker'

export default function CardFooter() {
  return (
    <div className={styles.cardFooter}>
      <PokemonSticker />
    </div>
  )
}
