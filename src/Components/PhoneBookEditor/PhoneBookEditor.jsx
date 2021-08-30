import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {addContacts} from '../../redux/contacts/contacts-operations'
import contactsSelectors from '../../redux/contacts/contacts-selectors'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './PhoneBookEditor.module.css'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
function PhoneBookEditor() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  
    const classes = useStyles();

  const dispatch = useDispatch()
  const data = useSelector(contactsSelectors.getContacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const resetForm = () => {
    setName('');
    setNumber('');
  
  }
  const handleChange = (e) => {
// console.log({ target: { name, value } })
      const name = e.target.name

    const value = e.target.value
    switch (name) {
      case 'name':
        return setName(value)
      case 'number':
        return setNumber(value)
     
      default:
        return
    }
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
if (
      data.some((el) => el.name === name) ||
  data.some((el) => el.number === number)

    ) {
      resetForm();
      return toast(`${name} is already in contacts`)
    }
    dispatch(addContacts({ name, number }));
    // console.log(dispatch(addContacts({ name, number, email })))
    resetForm();
    // setForm(formInitialState)
   
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel className={classes.margin} htmlFor=""/>
          <Input
   
            required
            placeholder="Search name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
            startAdornment={
              
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>}
              
          />
          {/* <Grid item>
            <AccountCircle />
          </Grid> */}
        </div>

        <div>
          {/* <Grid item>
            <TextField id="input-with-icon-grid" label="Number" />
          </Grid> */}
          <InputLabel className={classes.margin}  htmlFor=""/>
          <Input
           
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Search number"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>
            }
            
          />
        </div>
        <div className={styles.fab}>
          
              <Fab  color="primary" aria-label="add" type="submit" >
         <AddIcon  />
        </Fab>
        </div>
        
        {/* <button type="submit">Add contact</button> */}
      </form>
      <ToastContainer />
    </div>
  )
}

export default PhoneBookEditor