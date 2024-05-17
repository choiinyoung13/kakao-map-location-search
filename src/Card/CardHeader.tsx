import styles from './CardHeader.module.css'
import CardTitle from './CardTitle'

interface CardHeaderProps {
  name: string
  id: number
}

export default function CardHeader({ name, id }: CardHeaderProps) {
  return (
    <div className={styles.cardHeader}>
      <CardTitle name={name} id={id} />
    </div>
  )
}
