import { Routes, Route } from 'react-router-dom'
import PokemonCardList from '../List/PokemonCardList'
import PokemonDetail from './PokemonDetail'

export default function PageNavigator() {
  return (
    <Routes>
      <Route path={'/'} element={<PokemonCardList />} />
      <Route path={'/pokemon/:name'} element={<PokemonDetail />} />
    </Routes>
  )
}
