import { Box, Container, Grid, Typography } from "@mui/material"
import { BAInput } from "../components/BAInput"
import BADrawer from "../components/BADrawer"
import BAButton from "../components/BAButton"
import { useState } from "react"
import { sendData } from "../config/firebaseMethod"

export const FeeSubmissionForm = () => 
    {
        const [stdName,setStdName] = useState<string>()
        const [stdID,setStdID] = useState<string>()
        const [tutionFee,setTutionFee] = useState<string>()
        const [registrationFee,setRegistrationFee] = useState<string>()
        const [labCharges,setLabCharges] = useState<string>()

        const addData = async() => {
            let obj = {
                stdName:stdName,
                stdID:stdID,
                tutionFee:tutionFee,
                registrationFee:registrationFee,
                labCharges:labCharges
            }
            sendData("feeSubmission",obj);
        }
    return<>
        <BADrawer />
        <Box>
            
            <Container maxWidth="sm" className="mt-3">
                <Typography variant="h4" align="center" gutterBottom>
                    Fee Submission Form
                </Typography>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <BAInput 
                            label="Student Name"
                            type="text"
                            required={true}
                            fullWidth={true}
                            onChange={(e:any)=>setStdName(e.target.value)}
                        />
                    </Grid>
                        
                    <Grid item xs={12}>
                        <BAInput 
                          label="Student ID"
                          type="text"
                          required={true}
                          fullWidth={true}
                          onChange={(e:any)=>setStdID(e.target.value)}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Tution fee"
                          type="number"
                          required={true}
                          fullWidth={true}
                          onChange={(e:any)=>setTutionFee(e.target.value)}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Registration fee"
                          type="number"
                          required={true}
                          fullWidth={true}
                          onChange={(e:any)=>setRegistrationFee(e.target.value)}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <BAInput 
                          label="Lab charges"
                          type="number"
                          fullWidth={true}
                          onChange={(e:any)=>setLabCharges(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} className="text-center">
                        <BAButton variant="contained" color="primary" label="Submit" onClick={addData}/>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </>
}