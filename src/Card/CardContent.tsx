/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { FaQuestion } from 'react-icons/fa'
import styles from './CardContent.module.css'

interface CardContentProps {
  imgSrc?: string
  isLoading?: boolean
}

export default function CardContent({ imgSrc, isLoading }: CardContentProps) {
  return (
    <div className={styles.cardImageContainer}>
      {isLoading ? <FaQuestion size={100} /> : <img className={styles.img} src={imgSrc} alt={'pokemon'} />}
    </div>
  )
}
