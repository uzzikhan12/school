import { Box, Container, Grid, Typography } from "@mui/material"
import BADrawer from "../components/BADrawer"
import BASelect from "../components/BASelect"
import { useState } from "react"
import { sendData } from "../config/firebaseMethod"
import { BAInput } from "../components/BAInput"
import BAButton from "../components/BAButton"

export const SyllabusForm = () => 
{
    const [stdClass , setStdClass] = useState<any>()
    const [subject , setSubject] = useState<any>()
    const [syllabus , setSyllabus] = useState<any>()

    const addData = () => {
        let obj = {
            class:stdClass,
            subject:subject,
            syllabus:syllabus,
        }
        sendData("syllabus",obj)
    }

    return<>
        <BADrawer />

        <Box>
        <Container maxWidth="sm" className="mt-3">
            <Typography variant="h4"  gutterBottom>
                Syllabus
            </Typography>
                
            <Grid container spacing={3}>
                <Grid className="m-auto" item xs={12}>
                    <BASelect label={"Class"}val1={"5"} val2={"6"} val3={"7"} val4={"8"} val5={"9"} val6={"10"}
                     onChange={(e:any) => setStdClass(e.target.value)}
                     />
                </Grid>
                <Grid className="m-auto" item xs={12}>
                    <BASelect label={"Subject"} val1={"Math"} val2={"English"} val3={"Computer"} val4={"Science"} val5={"Physics"} val6={"Chemistry"}
                     onChange={(e:any) => setSubject(e.target.value)}
                     />
                </Grid>
                <Grid className="m-auto" item xs={12}>
                    <BAInput label="Syllabus" rows={5}
                      onChange={(e:any)=>setSyllabus(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} className="text-center mb-5">
                    <BAButton onClick={addData}
                        variant="contained"
                        color="primary" 
                        label="Add"/>
                </Grid>
            </Grid>
        </Container>
        </Box>
    </>
} 