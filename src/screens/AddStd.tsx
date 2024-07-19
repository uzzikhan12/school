import { Box, Container, Grid, SelectChangeEvent, Typography } from "@mui/material"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"
import BADrawer from "../components/BADrawer"
import { sendData } from "../config/firebaseMethod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASelect from "../components/BASelect";

export const AddStd = () => {

    const [firstName,setFirstName] = useState<string>();
    const [lastName,setLastName] = useState<string>();
    const [email,setEmail] = useState<any>();
    const [age,setAge] = useState<number>();
    const [dateOfBirth,setDateOfBirth] = useState<number>();
    const [stdClass,setStdClass] = useState<string>();
    const [religion,setReligion] = useState<string>();
    const [section,setSection] = useState<string>();

    const addData = async() => {
        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            dateOfBirth: dateOfBirth,
            stdClass: stdClass,
            religion: religion,
            section: section
        }
       await sendData("students",obj);
    }


    return <>

        <BADrawer/>

        <Box>
            <Container maxWidth="sm" className="mt-3">
                <Typography variant="h4" align="center" gutterBottom>
                    Admission Form
                </Typography>
                
                <form >
                    
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <BAInput
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={(e:any) => setFirstName(e.target.value)}
                        />
                   </Grid>

                   <Grid item xs={6}>
                    <BAInput
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        onChange={(e:any) => setLastName(e.target.value)}
                        required
                    />
                   </Grid>

                   <Grid item xs={12}>
                    <BAInput
                        label="Email"
                        variant="outlined"
                        fullWidth
                        onChange={(e:any) => setEmail(e.target.value)}
                        required
                        type="email"
                    />
                   </Grid>

                   <Grid item xs={12}>
                    <label className="m-1">Date of Birth</label>
                    <BAInput
                        variant="outlined"
                        fullWidth
                        onChange={(e:any) => setDateOfBirth(e.target.value)}
                        required
                        type="date"
                    />
                   </Grid>

                   <Grid item xs={6}>
                    <BAInput
                        label="Age"
                        variant="outlined"
                        fullWidth
                        onChange={(e:any) => setAge(e.target.value)}
                        required
                        type="number"
                    />
                   </Grid>


                   <Grid item xs={6}>
                   <BASelect label={"Class"} values={['5', '6', '7', '8', '9', '10']}
                     onChange={(e:any) => setStdClass(e.target.value)}
                     />
                   </Grid>

                   <Grid item xs={6}>
                    <BAInput
                        label="Religion"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e:any) => setReligion(e.target.value)}
                    />
                   </Grid>

                   <Grid item xs={6}>
                    <BASelect label={"Section"} values={["A","B","C","D"]}
                     onChange={(e:any) => setSection(e.target.value)}
                     />
                   </Grid>
                   
                   <Grid item xs={12} className="text-center mb-5">
                    <BAButton onClick={addData}
                        variant="contained"
                        color="primary" 
                        label="Register"/>
                   </Grid>
                </Grid>
            </form>
        </Container>

        </Box>
    </>
}