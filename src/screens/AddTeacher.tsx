import { Box, Container, Grid, Typography } from "@mui/material"
import { BAInput } from "../components/BAInput"
import BADrawer from "../components/BADrawer"
import BAButton from "../components/BAButton"

export const AddTeacher = () => {
    return <>
         <BADrawer/>

<Box>
    <Container maxWidth="sm" className="mt-3">
        <Typography variant="h4" align="center" gutterBottom>
            Registration Form
        </Typography>
        
        <form >
            
          <Grid container spacing={3}>
            <Grid item xs={6}>
                <BAInput
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    required
                />
           </Grid>
           <Grid item xs={6}>
            <BAInput
                label="Last Name"
                variant="outlined"
                fullWidth
                required
            />
           </Grid>
           <Grid item xs={12}>
            <BAInput
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
            />
           </Grid>
           <Grid item xs={12}>
            <BAInput
                label="Age"
                variant="outlined"
                fullWidth
                required
                type="number"
            />
           </Grid>
           <Grid item xs={12}>
            <BAInput
                label="CNIC Number"
                variant="outlined"
                fullWidth
                required
            />
           </Grid>
           <Grid item xs={12}>
            <label className="m-1">Date of Birth</label>
            <BAInput
                variant="outlined"
                fullWidth
                name="age"
                required
                type="date"
            />
           </Grid>
           <Grid item xs={6}>
            <BAInput
                label="Subject"
                variant="outlined"
                fullWidth
                required
            />
           </Grid>
           <Grid item xs={6}>
            <BAInput
                label="Class"
                variant="outlined"
                fullWidth
                name="course"
                required
            />
           </Grid>
           <Grid item xs={12} className="text-center">
            <BAButton variant="contained" color="primary" label="Register"/>
           </Grid>
        </Grid>
    </form>
</Container>

</Box>
    </>
}