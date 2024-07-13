import { Box, Container, Grid, Typography } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"
import BASelect from "../components/BASelect"
import { useState } from "react"
import { sendData } from "../config/firebaseMethod";

export const AddSubject = () => 
{
    const [stdClass,setStdClass] = useState<string>();
    const [sub1,setSub1] = useState<string>();
    const [sub2,setSub2] = useState<string>();
    const [sub3,setSub3] = useState<string>();
    const [sub4,setSub4] = useState<string>();
    const [sub5,setSub5] = useState<string>();
    const [sub6,setSub6] = useState<string>();

    const addData = () => {
        let obj = {
            class: stdClass,
            sub1: sub1,
            sub2: sub2,
            sub3: sub3,
            sub4: sub4,
            sub5: sub5,
            sub6: sub6,
        }
        sendData("subject",obj);
    }

    return <>
        <BADrawer />
        <Box>
        <Container maxWidth="sm" className="mt-3">
            <Typography variant="h4"  gutterBottom>
                Add Subject
            </Typography>
                
            <Grid container spacing={3}>
                <Grid className="m-auto" item xs={12}>
                    <BASelect label={"Class"} val1={"7"} val2={"8"} val3={"9"} val4={"10"}
                     onChange={(e:any) => setStdClass(e.target.value)}
                     />
                </Grid>
                
                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub1(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub2(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub3(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub4(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub5(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6}>
                    <BAInput 
                        label="Subject Name"
                        type="text"
                        onChange={(e:any)=> setSub6(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} className="text-center">
                    <BAButton onClick={addData} variant="contained" color="primary" label="Submit"/>
                </Grid>

            </Grid>
        </Container>
        </Box>
    </>
}