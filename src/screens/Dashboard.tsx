import { Box, Container, Grid } from "@mui/material"
import BADrawer from "../components/BADrawer"
import { BACard } from "../components/BACard"
import { useEffect, useState } from "react"
import { getData } from "../config/firebaseMethod"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {

  const [allData, setAllData] = useState<any[]>([])
  const [allTeacherData, setAllTeacherData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate();

  const fetchData = async() => {
    await getData('students',setAllData,setLoading);
    await getData('teacher',setAllTeacherData,setLoading);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return<>
    <BADrawer />
    <Box>
      <Container maxWidth="md" className="mt-3">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BACard main={"Total Student"} total={loading ? "Loading..." : allData.length.toString()} className="shadow" sx={{backgroundColor:"#1976d2"}} onClick={()=>navigate("/allstudent")}/>
          </Grid>
          <Grid item xs={4}>
            <BACard main={"Total Taecher"} total={loading ? "Loading" : allTeacherData.length.toString()} className="shadow" sx={{backgroundColor:"#26a69a"}} onClick={()=>navigate("/teacherlist")}/>
          </Grid>
        </Grid>
      </Container>
    </Box>



  </>
}