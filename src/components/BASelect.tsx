// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

// export default function BASelect(props:any) {
//   const {val1,val2,val3,val4,val5,val6,val7,label,onChange,onClick1,onClick2,onClick3,onClick4,onClick5,onClick6,onClick7} = props
  
//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl className='border' fullWidth>
//         <InputLabel variant="standard" htmlFor="uncontrolled-native">
//           {label}
//         </InputLabel>
//         <NativeSelect
        
//           defaultValue=""
//           onChange={onChange}
//         >
//           <option onClick={onClick1} value={val1}>{val1}</option>
//           <option onClick={onClick2} value={val2}>{val2}</option>
//           <option onClick={onClick3} value={val3}>{val3}</option>
//           <option onClick={onClick4} value={val4}>{val4}</option>
//           <option onClick={onClick5} value={val5}>{val5}</option>
//           <option onClick={onClick6} value={val6}>{val6}</option>
//           <option onClick={onClick7} value={val7}>{val7}</option>
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// }



import { Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';


// type BASelectProps = {
//   value: string;
//   onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
//   label: string;
//   values: string[];
// }

export default function BASelect(props:any) {
  const {onChange , label, values} = props
  
  return (
    
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select onChange={onChange} label={label}>
        {values.map((val:any, index:any) => (
          <MenuItem key={index} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
  );
};

