import { Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import { Autocomplete } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';


const Professional = (props) => {
return (
    <>
    <Box sx={{
				marginTop: 5,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 3 ,
				}} >
        <Typography sx={{color: "black"}} component="h1" variant="h5">
            Professional Details
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={company}
            sx={{ width: 450 }}
            renderInput={(params) => <TextField {...params} name="company" label="Company" />}
            />
         </Grid>
            <Grid item xs={12} >
                <TextField
                    sx={{width: 450}}
                    required
                    fullWidth
                    name="role"
                    label="Role"
                    type="text"
                    id="role"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
					<Stack component="form" noValidate spacing={3}>
						<TextField
							id="dob"
							label="From Date"
							type="date"
							defaultValue="dd-mm-yy"
							sx={{ width: 225 }}
							InputLabelProps={{
							shrink: true,
							}}
						/>

					</Stack>
					</Grid>
                    <Grid item xs={12} sm={6}>
					<Stack component="form" noValidate spacing={3}>
						<TextField
							id="end"
							label="End Date"
							type="date"
							defaultValue="dd-mm-yy"
							sx={{ width: 225 }}
							InputLabelProps={{
							shrink: true,
							}}
						/>

					</Stack>
					</Grid>
            </Grid>
        </Box> 
        </>
    )
}

const company = [
    { label :'Iconio Private Ltd'},
    { label :'Tigeen'},
    { label :'AAA Private Ltd'},
    { label :'Start Industries'},
    { label :'Tech Fetch'}
    

];

export default Professional
