import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});


export const BACard = (props:any) =>   
{
    const {main , total, className, sx, onClick} = props    

    return <>    
    <Card className={className}>
      <CardContent className='py-3 w-100' sx={sx}>
        <Typography className='fs-3 text-center text-white' sx={{ mb: 1.5 }}>
          {main}
        </Typography>
        <Typography sx={{ fontSize: 20 }} className='text-center text-white' >
          {total}
        </Typography>
        <Typography className='text-center text-white' gutterBottom>
          
          <Button onClick={onClick} variant='text' className='fs-2 text-white'>
            <ArrowRightAltIcon/>
          </Button>
        
        </Typography>
      </CardContent>
    </Card>
    </>
}