import { Box, Container, Grid, Typography } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"

export const ExamSchedule = () => {
    return <>
        <BADrawer />
        <Box>
        <Container maxWidth="sm" className="mt-3">
            <Typography variant="h4" align="center" gutterBottom>
                Add new class
            </Typography>
                
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BAInput 
                        label="Exam Name"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <BAInput 
                        label="Subject Type"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Select Class"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Section"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <label>Select Date</label>
                    <BAInput 
                        type="date"
                    />
                </Grid>

                <Grid item xs={12}>
                    <BAInput 
                        label="Select Time"
                        type="text"
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