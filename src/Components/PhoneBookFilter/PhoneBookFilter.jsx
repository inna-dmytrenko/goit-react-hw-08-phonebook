import { useSelector, useDispatch } from 'react-redux'
import { filterItem } from '../../redux/contacts/contacts-actions'

import contactsSelectors from '../../redux/contacts/contacts-selectors'

function PhoneBookFilter() {
  const dispatch = useDispatch()

  const value = useSelector(contactsSelectors.getFilter)

  const onChange = (event) => {
    const value = event.target.value

    dispatch(filterItem(value))
  }

  return (
    <div>
      <label>
        <p>Filter contacts by name: </p>
        <input
          name="filter"
          onChange={onChange}
          type="text"
          value={value}
          placeholder="Name"
        />
      </label>
    </div>
  )
}

export default PhoneBookFilter
