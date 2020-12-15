import {makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from "react-router-dom"
import axios from "axios";
import {useState } from "react";

const UbahData = () => {
    const [lp, setlp] = useState("");

    function submitPerubahanLP() {
      let data = {
          lp: lp
      };
  
      axios.put('http://localhost:5000/pemuridan',data);
    }

    const useStyles = makeStyles((theme) => ({
      title: { flexGrow: 1 },
      PenjelasanInput:{
        marginTop: 30,
        marginLeft: 40
      },
      KolomSearch: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
          marginTop: 10,
          marginLeft: 40
        },
      },
      seeMore: {
        marginTop: theme.spacing(3),
      },
      table: {
        align: "center",
        marginLeft:40,
        marginTop: 40
      },
      title:{
          marginTop: 20
      },
      submit:{
          marginLeft: 200,
          marginTop: 20
      },
      home:{
          marginLeft: 1400
      }
    }));
  
    const classes = useStyles();

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }
  
    return(
      <div className={classes.root}>
        <div>
            <Typography variant="h2" color="primary" align="center" className={classes.PenjelasanInput}>
                Masukkan nama LP
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }} >
                <HomeIcon color="primary" style={{ fontSize: 65 }} className={classes.home}/>
            </Link>
        </div>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              LP
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={lp}
                onChange={(e) => { setlp(e.target.value)}} 
            />
        </form>
        <Button onClick={() => { submitPerubahanLP() }} variant="contained" color="primary" className={classes.submit} >
            Submit
        </Button>
      </div>
    )
  }
  
  export default UbahData;