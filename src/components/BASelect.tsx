import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BASelect(props:any) {
  const {val1,val2,val3,val4,val5,val6,val7,label,onChange} = props
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
        
          defaultValue=""
          onChange={onChange}
        >
          <option value={val1}>{val1}</option>
          <option value={val2}>{val2}</option>
          <option value={val3}>{val3}</option>
          <option value={val4}>{val4}</option>
          <option value={val5}>{val5}</option>
          <option value={val6}>{val6}</option>
          <option value={val7}>{val7}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
