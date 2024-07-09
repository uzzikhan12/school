import { Box, Container, Grid, Typography } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"

export const AddSubject = () => {
    return <>
        <BADrawer />
        <Box>
        <Container maxWidth="sm" className="mt-3">
            <Typography variant="h4" align="center" gutterBottom>
                Add Subject
            </Typography>
                
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BAInput 
                        label="Add Class"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <BAInput 
                        label="Subject Name"
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