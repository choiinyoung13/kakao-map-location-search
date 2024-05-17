/* eslint-disable prettier/prettier */
import styles from './CardTitle.module.css'

interface CardTitleProps {
  name: string
  id: number
}

function formatToThreeDigits(n:number):string {
  if (!Number.isInteger(n)) {
    throw new Error('id must be an integer');
  }
  return n.toString().padStart(3, '0');
}

export default function CardTitle({ name, id }: CardTitleProps) {
  
    

  return (
    <div className={styles.cardTitle}>
      <div className={styles.titleContainer}>
        <span className={styles.number}>{formatToThreeDigits(id)}</span>
        <span className={styles.title}>{name}</span>
      </div>
    </div>
  )
}
