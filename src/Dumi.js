import React, { useState } from "react";
import { MenuItem, Radio } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";
import { Select } from '@mui/material'
import { TextField } from '@mui/material'
import { data } from "react-router-dom";
import { Switch } from '@mui/material'
import { Box, Button } from '@mui/material'
import { Grid, Hidden } from '@mui/material'
import { Tab,Tabs,AppBar } from "@mui/material";


const Dumi = () => {
    const [name, setName] = useState([])
    const [course, setCourse] = useState("");
    const [val, setVal] = useState([40, 100])
    const getValue = (e) => {
        let data = name;
        data.push(e.target.value)


        // setName(e.target.value)
        console.log(data)
    }

    const update = (e) => {
        setCourse(e.target.value)
    }

    const handleTabs=(e ,val)=>{
        console.log(e.target.val)
    }
    return (
        <div>
        <div>
            <AppBar position="static">
                <Tabs value={1} onChange={handleTabs}>
                    <Tab label="Item 1"/>
                    <Tab label="Item 2"/>
                    <Tab label="Item 3"/>
                    
                </Tabs>
            </AppBar>
        {/* <Grid container spacing={25}>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: 'green' }}>Block</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: 'green' }}>Block</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: 'green' }}>Block</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: 'green' }}>Block</h1></Grid>
        </Grid> */}
        </div>


          <Grid container s={12} style={{backgroundColor:'green'}} spacing={10}>
                              <Grid  item sm={6}><h1>Block 1</h1></Grid>
                             <Grid  item sm={6}><h1>Block 2</h1></Grid>


                        </Grid>



    <h1>how to use google font in react</h1>

     <button>click me</button>
     <Checkbox color="secondary" value="nikhil" onChange={(e)=>{getValue(e)}}/>
           <Checkbox color="secondary" value="aryan" onChange={(e)=>{getValue(e)}}/>
               <Checkbox color="secondary" value="chauhan" onChange={(e)=>{getValue(e)}}/>
                  <Checkbox color="secondary"
                   value="chauhan"
                    onChange={(e)=>{getValue(e)}}
                    icon={<Favorite/>}
                    checkedIcon = {<Favorite/>}

                    />
                    
                        <span>male</span>
                        <Radio color="primary" value="male"/>
                    
                     
                        <span>female</span>
                        <Radio value="male"/>
                
                    <div style={{width:300,margin:40}}>
                        <Slider value={val}/>
                    </div>
                    <Select  value={course} displayEmpty onChange={update}>
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={1}>Node</MenuItem>
                        <MenuItem value={2}>PHP</MenuItem>
                        <MenuItem value={3}>Java</MenuItem>
                        <MenuItem value={4}>Javascript</MenuItem>

                    </Select>
                <TextField
                label = "enter name"
                //  onChange={data}
                />
                <Switch color="secondary" style={{color:'red'}}/>
                <Box  component='span' style={{color:'black'}} clone m={10} p={0    }>

                <Button>Hello</Button>
                </Box>
{/* 
 <ButtonGroup
             orientation="vertical"
             
             variant="outlined">

             <Button>one</Button>
             <Button>two</Button>
             <Button>three</Button>
             </ButtonGroup>  */}
 <Button color="primary">material ui button</Button>
             <Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button> 
 </div> 
             )
}


// export default Dumi;