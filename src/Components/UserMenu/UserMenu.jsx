import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from '../../redux/auth'

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)
  // const islogOut = dispatch(authOperations.logOut())
  // const avatar = defaultAvatar;
  return (
    <div>
      <img alt="" width="32" />
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  )
}
