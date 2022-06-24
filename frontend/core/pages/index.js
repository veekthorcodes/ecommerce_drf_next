import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({ 
  example: {
    color: "#ccc"
  }

}));


export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.example}>
      Hello
    </div>
  )
}
