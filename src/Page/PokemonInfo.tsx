/* eslint-disable react/require-default-props */
import styels from './PokemonInfo.module.css'

interface PokemonInfoProps {
  title: string
  name?: string
  id?: number
  types?: string[]
  weight?: number
  height?: number
  baseStats?: {
    name: string
    value: number
  }[]
}

export default function PokemonInfo({ title, name, id, types, weight, height, baseStats }: PokemonInfoProps) {
  if (title === '기본 정보') {
    return (
      <div className={styels.infoContainer}>
        <p className={styels.title}>{title}</p>
        <div className={styels.infoWrapper}>
          <div className={styels.infoItem}>
            <span className={styels.key}>{'번호'}</span>
            <span className={styels.value}>{id}</span>
          </div>
          <div className={styels.infoItem}>
            <span className={styels.key}>{'이름'}</span>
            <span className={styels.value}>{name}</span>
          </div>
          <div className={styels.infoItem}>
            <span className={styels.key}>{'타입'}</span>
            <span className={styels.value}>{types?.join(', ')}</span>
          </div>
          <div className={styels.infoItem}>
            <span className={styels.key}>{'키'}</span>
            <span className={styels.value}>{`${height}m`}</span>
          </div>
          <div className={styels.infoItem}>
            <span className={styels.key}>{'몸무게'}</span>
            <span className={styels.value}>{`${weight}kg`}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styels.infoContainer}>
      <p className={styels.title}>{title}</p>
      <div className={styels.infoWrapper}>
        {baseStats?.map((item) => {
          return (
            <div className={styels.infoItem} key={`${item}`}>
              <span className={styels.key}>{item.name}</span>
              <span className={styels.value}>{item.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
