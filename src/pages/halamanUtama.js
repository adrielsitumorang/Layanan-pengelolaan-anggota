import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AppBar, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import { Link } from "react-router-dom";
import axios from "axios";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: blueGrey[900],
    color: grey[50],
    fontSize: 18,  
  }
}))(TableCell);

// function createData(nim,nama, jurusan, gender, angkatan, LP) {
//   return {nim,nama, jurusan, gender, angkatan, LP };
// }

// const rows = [
//   createData('18218047','Adriel Gustino Parlinggoan Situmorang', "Sistem dan Teknologi Informasi", "Laki-Laki", 2018, "Navigator"),
//   createData('18218047','Adriel Gustino Parlinggoan Situmorang', "Sistem dan Teknologi Informasi", "Laki-Laki", 2018, "Sion"),
//   createData('18218047','Adriel Gustino Parlinggoan Situmorang', "Sistem dan Teknologi Informasi", "Laki-Laki", 2018, "LPMI")
// ];

function Halamanutama() {
  const [rows, setRows] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('https://sleepy-sands-35892.herokuapp.com/pemuridan').then((res) => {
      setRows(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

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
    }
  }));

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Typography align="center" variant="h3" color="inherit" style={{marginTop:"25px"}}>
          Discipleship Data Management
        </Typography>
      </AppBar>
      <div>
        <Typography variant="h6" color="primary" className={classes.PenjelasanInput}>
          <b>
            Masukkan nama LP
          </b>
        </Typography>
      </div>
      <form className={classes.KolomSearch} noValidate autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" />
      </form>
      <TableContainer className={classes.table}>
        <TableHead>
          <StyledTableCell align="center" > NIM </StyledTableCell>
          <StyledTableCell align="center" > Nama </StyledTableCell>
          <StyledTableCell align="center" > Jurusan  </StyledTableCell>
          <StyledTableCell align="center"> Gender  </StyledTableCell>  
          <StyledTableCell align="center"> Angkatan  </StyledTableCell>
          <StyledTableCell align="center"> LP  </StyledTableCell>       
        </TableHead>
        <TableBody>
            {rows.map((row) => (
              <TableRow key={row.nim}>
                <TableCell >{row.nim}</TableCell>
                <TableCell >{row.nama}</TableCell>
                <TableCell >{row.jurusan}</TableCell>
                <TableCell >{row.gender}</TableCell>
                <TableCell >{row.angkatan}</TableCell>
                <TableCell >{row.lp}</TableCell>
                <TableCell >
                  <Link to="/Anggota/ubah/" style={{ textDecoration: "none" }}>
                    <button>
                      Ubah LP
                    </button>
                  </Link>
                </TableCell>
                <TableCell >
                  <button>
                    Hapus
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </TableContainer>
      <Link to="/Anggota/tambah/" style={{ textDecoration: "none" }} >
        <Fab color="primary" aria-label="add" style={{ marginLeft: "1400px"}} >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  )
}

export default Halamanutama;
