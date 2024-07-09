import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BACard = (props:any) =>   
{
    const {subject , subClass} = props    
    
    return <>    
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='py-5'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Class : {subClass}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Subject : {subject}
        </Typography>
      </CardContent>
    </Card>
    </>
}