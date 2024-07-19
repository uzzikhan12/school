import { TextField } from '@mui/material';

export const BAInput = (props:any) => 
{
    
  const { label, variant , value , onChange , rows, type} = props;
  
    return <>
            <TextField
              label={label}
              variant={variant}
              fullWidth
              value={value}
              onChange={onChange}
              required
              rows={rows}
              multiline
              type={type}
              className='bg-white rounded'
            />
    
    </>
} 