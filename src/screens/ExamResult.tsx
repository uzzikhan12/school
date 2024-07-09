import { Container,Box,Typography,Grid } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"

export const ExamResult = () => {
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
                        label="Grade Name"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <BAInput 
                        label="Grade Point"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Percentage From"
                        type="text"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Percentage Upto"
                        type="text"
                    />
                </Grid>
        

                <Grid item xs={12}>
                    <BAInput 
                        label="Comment"
                        type="text"
                        rows="5"
                        multiline
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