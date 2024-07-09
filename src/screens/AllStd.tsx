import { useEffect, useState } from "react"
import BADataGrid from "../components/BADataGrid"
import BADrawer from "../components/BADrawer"
import { getData } from "../config/firebaseMethod";
import { Box, Paper, Typography } from "@mui/material";

export const AllStd = () => {
    const [allData, setAllData] = useState<any>([]);

    const getStd = () => {
        getData("students")
        .then((res) => {
            setAllData(res);
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getStd();
    },[])
    


    return <>
        <BADrawer />
        {/* <Box className="container p-3">
            {Array.isArray(allData) &&
              allData.map((x,i)=>(
                <Paper>
                   <Typography className="fs-4 fw-bold">{x.age}</Typography>
                </Paper>
              ))
            }
        </Box> */}
    </>
}