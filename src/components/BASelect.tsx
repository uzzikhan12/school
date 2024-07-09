import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BASelect(props:any) {
  const {val1,val2,val3,val4,val5,label,onChange} = props
  const [val, setVal] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label={label}
          // onChange={handleChange}
          onChange={onChange}
        >
          <MenuItem value={val1}>{val1}</MenuItem>
          <MenuItem value={val2}>{val2}</MenuItem>
          <MenuItem value={val3}>{val3}</MenuItem>
          <MenuItem value={val4}>{val4}</MenuItem>
          <MenuItem value={val5}>{val5}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

// export default function BASelect(props:any) {
//   const {val1,val2,val3,val4,val5,label,onChange} = props
  
//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel variant="standard" htmlFor="uncontrolled-native">
//           {label}
//         </InputLabel>
//         <NativeSelect
//           defaultValue={label}
//           onChange={onChange}
//           // inputProps={{
//           //   name: 'age',
//           //   id: 'uncontrolled-native',
//           // }}
//         >
//           <option value={val1}>{val1}</option>
//           <option value={val2}>{val2}</option>
//           <option value={val3}>{val3}</option>
//           <option value={val4}>{val4}</option>
//           <option value={val5}>{val5}</option>
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// }
