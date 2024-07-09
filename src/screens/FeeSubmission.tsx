import { Box, Container, Grid, Typography } from "@mui/material"
import { BAInput } from "../components/BAInput"
import BADrawer from "../components/BADrawer"
import BAButton from "../components/BAButton"

export const FeeSubmissionForm = () => {
    return<>
        <BADrawer />
        <Box>
            
            <Container maxWidth="sm" className="mt-3">
                <Typography variant="h4" align="center" gutterBottom>
                    Fee Submission Form
                </Typography>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <BAInput 
                            label="Student Name"
                            type="text"
                            required={true}
                            fullWidth={true}
                        />
                    </Grid>
                        
                    <Grid item xs={12}>
                        <BAInput 
                          label="Student ID"
                          type="text"
                          required={true}
                          fullWidth={true}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Tution fee"
                          type="number"
                          required={true}
                          fullWidth={true}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Registration fee"
                          type="number"
                          required={true}
                          fullWidth={true}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Lab charges"
                          type="number"
                          fullWidth={true}
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