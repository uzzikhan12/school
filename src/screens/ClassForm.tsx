import { Box, Container, Grid, Typography } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"

export const ClassForm = () => 
{
    
    return<>
        <BADrawer />
        <Box>
        <Container maxWidth="sm" className="mt-3">
            <Typography variant="h4" align="center" gutterBottom>
                Add new class
            </Typography>
                
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <BAInput 
                        label="Add Class"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="ID No"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Gender"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Teacher Name"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Section"
                        type="text"
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <BAInput 
                        label="Email"
                        type="email"
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Phone Num"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Monthly tution fee"
                        type="number"
                    />
                </Grid>

                <Grid item xs={12} className="text-center">
                    <BAButton variant="contained" color="primary" label="Submit"/>
                </Grid>

            </Grid>
        </Container>
        </Box>
    </>
}