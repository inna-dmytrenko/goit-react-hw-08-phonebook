import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { filterItem } from '../../redux/contacts/contacts-actions'

import contactsSelectors from '../../redux/contacts/contacts-selectors'

function PhoneBookFilter() {
  const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


  const classes = useStyles();
  const dispatch = useDispatch()

  const value = useSelector(contactsSelectors.getFilter)

  const onChange = (event) => {
    const value = event.target.value

    dispatch(filterItem(value))
  }

  return (
    <TextField
       onChange={onChange}
          type="text"
          value={value}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Filter contacts by name"
        // InputProps={{
        //   startAdornment: (
        //     // <InputAdornment position="start">
        //     //   <AccountCircle />
        //     // </InputAdornment>
        //   ),
        // }}
      />
    // <FormControl className={classes.margin}>
    //   <InputLabel  >Filter contacts by name:
      
    //     <Input
    //       name="filter"
    //       onChange={onChange}
    //       type="text"
    //       value={value}
    //       placeholder="Name"
    //     />
    //   </InputLabel>
    // </FormControl>
  )
}

export default PhoneBookFilter
