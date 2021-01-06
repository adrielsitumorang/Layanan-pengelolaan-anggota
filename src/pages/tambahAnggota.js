import {makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from "react-router-dom"
import {useState } from "react";
import axios from "axios";

const TambahAnggota = () => {
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
          marginLeft: 250,
          marginTop: 40
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
    
      const [nim, setnim] = useState("");
      const [nama, setnama] = useState("");
      const [jurusan, setjurusan] = useState("");
      const [gender, setgender] = useState("");
      const [angkatan, setangkatan] = useState("");
      const [lp, setlp] = useState("");
    
      function submitAnggotaBaru() {
          let data = {
            nim: nim,
            nama: nama,
            jurusan: jurusan,
            gender: gender,
            angkatan: angkatan,
            lp: lp
          };
    
          axios.post('https://sleepy-sands-35892.herokuapp.com/pemuridan/',data);
          // axios.post('http://localhost:5000/pemuridan/',data);
      }

    return(
      <div className={classes.root}>
        <div>
            <Typography variant="h2" color="primary" align="center" className={classes.PenjelasanInput}>
                Masukkan data anggota
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }} >
                <HomeIcon color="primary" style={{ fontSize: 65 }} className={classes.home}/>
            </Link>
        </div>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              NIM
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
          <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={nim}
                onChange={(e) => { setnim(e.target.value)}} 
            />
        </form>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              Nama
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
          <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={nama}
                onChange={(e) => { setnama(e.target.value)}} 
            />
        </form>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              Jurusan
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
          <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={jurusan}
                onChange={(e) => { setjurusan(e.target.value)}} 
            />
        </form>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              Gender
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
          <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={gender}
                onChange={(e) => { setgender(e.target.value)}} 
            />
        </form>
        <div>
          <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
            <b>
              Angkatan
            </b>
          </Typography>
        </div>
        <form className={classes.KolomSearch} noValidate autoComplete="off">
          <TextField 
                id="outlined-basic" 
                variant="outlined"
                value={angkatan}
                onChange={(e) => { setangkatan(e.target.value)}} 
            />
        </form>
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
        <Button onClick={() => { submitAnggotaBaru() }} variant="contained" color="primary" className={classes.submit} >
            Submit
        </Button>
      </div>
    )
  }
  
  export default TambahAnggota;