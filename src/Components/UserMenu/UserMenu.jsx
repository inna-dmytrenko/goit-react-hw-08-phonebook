import { useDispatch, useSelector } from 'react-redux'
import { authOperations, authSelectors } from '../../redux/auth'
// import { makeStyles } from '@material-ui/core/styles';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './UserMenu.module.css'
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)
  // const islogOut = dispatch(authOperations.logOut())
  // const avatar = defaultAvatar;
//   const BootstrapButton = withStyles({
//   root: {
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   },
// })(Button);
//   const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
// }))(Button);
  const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  }));
  const theme = createTheme({
  palette: {
    primary: green,
  },
  });
    const classes = useStyles();
  return (
    <div>
      <img alt="" width="32" />
      <span className={styles.title}>Добро пожаловать, {name} </span>
       <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin} type="button" onClick={() => dispatch(authOperations.logOut())}>
          <ExitToAppIcon/>
        </Button>
        </ThemeProvider>
      {/* <Button variant="outlined" color="secondary" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button> */}
    </div>
  )
}
