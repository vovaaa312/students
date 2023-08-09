
import * as React from 'react';
import  {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';


export default function Student() {
    const paperStyle={padding:'50px 120px',width:270,margin:'50px auto' }
    const[name,setName]=useState('')
    const[address, setAddress]=useState('');
    const[students, setStudents]=useState([]);

    const hadnleClick=(e)=>{
      e.preventDefault();
      const student={name,address}
      console.log(student)
      fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
      }).then(()=>{console.log("Student was added to database")})
    }

    useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
      }
    )
    },[])

  return (
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Container >
        <Paper elevation={3} style={paperStyle}>
            <h1>Add Student</h1>
            <form className='Root' noValidate autoComplete='off' >
                
            <TextField          
          id="outlined-basic"
          label="Student Name"
          defaultValue=""
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField          
          id="outlined-basic"
          label="Student Address"
          defaultValue=""
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />

        <Button variant="contained" onClick={hadnleClick}>OK</Button>

            </form>

        </Paper>

        <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper>
      </Container>

      
    </Box>
  );
}
  
