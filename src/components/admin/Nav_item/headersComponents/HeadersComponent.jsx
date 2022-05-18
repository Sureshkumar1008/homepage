import React from 'react';
//import ImgMediaCard from './Cards';
import Navbarcom from './Navbar';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
//import { Decorator } from "../common/commonComponent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import Typed from "react-typed";


export default function HeaderComponent() {
    const classes = useStyles();
    return(

        <Box className={classes.HeaderWrapper} >
            <Navbarcom />
            <Box className={classes.Headcontainer}>
            <Typography variant="h3" component="h4" className={classes.Headertitle}>
                we plan,Build & Implement
               <br />
            Bussiness Efficient
            <br />
            IT Solutions...
            </Typography>
            <Typography variant="h3" component="h4" className={classes.HeaderDesc}>
            I'm a <span style={{ paddingRight: "5px" }}></span>
             
            </Typography>
           
        </Box>
        </Box>
     )
 }
 