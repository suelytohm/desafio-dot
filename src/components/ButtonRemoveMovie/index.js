import { FaTrashAlt } from 'react-icons/fa'
import { useCart } from '../../context/useCart'

export const ButtonRemoveMovie = ({ movie }) => {
  const { removeMovie } = useCart()
  return (
    <button className="button-remove" onClick={() => removeMovie(movie)}>
      <FaTrashAlt size={20} />
    </button>
  )
}
