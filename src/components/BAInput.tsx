import { TextField } from '@mui/material';

export const BAInput = (props:any) => 
{
    
  const { label, variant , value , onChange , rows} = props;
  
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
            />
    
    </>
} 