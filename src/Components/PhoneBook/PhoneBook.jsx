import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import React from 'react';
// import { Frame } from './PhoneBook.styled'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './PhoneBook.module.css'
import { deleteContacts } from '../../redux/contacts/contacts-operations'

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PhoneBook = ({ name, number, id }) => {
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    // color: 'green',
    backgroundColor: '#6bc56b',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
     padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,// 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#3f51b5',
  },
}));


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };





 
  //   const [deleteContact] = useDeleteContactMutation()
const dispatch= useDispatch()
  return (
    <div className={styles.grid}>

    <Grid className={styles.grid} item xs={8}>
      <Paper className={classes.paper}>
        <Card className={classes.root}>
     
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           <AccountCircleIcon/>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     {/* <MoreVertIcon /> */}
        //   </IconButton>
        // }
        // title={number}
              title={`${name}   :   ${number}`}
       
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
       <span onClick={() => dispatch(deleteContacts(id))}>
      <BsTrashFill />
    </span>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
   
      </CardActions>
      
       
      
    </Card>
      {/* <p>{name}</p>
      <p>{number}</p> */}
      
    </Paper>
    </Grid>
    </div>
  )
}
export default PhoneBook
