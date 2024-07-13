import { Box, Container, Grid, Typography } from "@mui/material"
import { BAInput } from "../components/BAInput"
import BADrawer from "../components/BADrawer"
import BAButton from "../components/BAButton"
import { sendData } from "../config/firebaseMethod"
import { useState } from "react"

export const AddTeacher = () => 
{
    const [firstName,setFirstName] = useState<string>();
    const [lastName,setLastName] = useState<string>();
    const [email,setEmail] = useState<any>();
    const [age,setAge] = useState<number>();
    const [cnic,setCnic] = useState<string>();
    const [subject,setSubject] = useState<string>();
    const [teacherClass,setTeacherClass] = useState<string>();

    const addData = async() => {
        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            cnic:cnic,
            subject:subject,
            class:teacherClass
        }
       await sendData("teacher",obj);
    }

    return <>
         <BADrawer/>

    <Box>
    <Container maxWidth="sm" className="mt-3">
        <Typography variant="h4" align="center" gutterBottom>
            Registration Form
        </Typography>
        
        <form >
            
          <Grid container spacing={3}>
            <Grid item xs={6}>
                <BAInput
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    required
                    onChange={(e:any) => setFirstName(e.target.value)}
                />
           </Grid>

           <Grid item xs={6}>
            <BAInput
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e:any) => setLastName(e.target.value)}
            />
           </Grid>

           <Grid item xs={12}>
            <BAInput
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                onChange={(e:any) => setEmail(e.target.value)}
            />
           </Grid>

           <Grid item xs={12}>
            <BAInput
                label="Age"
                variant="outlined"
                fullWidth
                required
                type="number"
                onChange={(e:any) => setAge(e.target.value)}
            />
           </Grid>

           <Grid item xs={12}>
            <BAInput
                label="CNIC Number"
                variant="outlined"
                fullWidth
                required   
                onChange={(e:any) => setCnic(e.target.value)}
            />
           </Grid>

           <Grid item xs={6}>
            <BAInput
                label="Subject"
                variant="outlined"
                fullWidth
                required
                onChange={(e:any) => setSubject(e.target.value)}
            />
           </Grid>

           <Grid item xs={6}>
            <BAInput
                label="Class"
                variant="outlined"
                fullWidth
                name="course"
                required
                onChange={(e:any) => setTeacherClass(e.target.value)}
            />
           </Grid>

           <Grid item xs={12} className="text-center">
            <BAButton variant="contained" color="primary" label="Register"
            onClick={addData}
            />
           </Grid>
        </Grid>
    </form>
</Container>

</Box>
    </>
}