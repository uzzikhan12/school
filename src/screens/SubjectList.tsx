import { Box, Grid } from '@mui/material';
import { BACard } from '../components/BACard';
import BADrawer from '../components/BADrawer';

export const SubjectList = () => {
    return<>
        <BADrawer />
        <Box className="w-75 m-auto">
            <Grid container spacing={3}>
                <Grid item xs={3} md={3} sm={3}>
                    <BACard />
                </Grid>
            </Grid>
        </Box>
            
    </>
}