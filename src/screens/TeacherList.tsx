import { useEffect, useState } from "react";
import BADrawer from "../components/BADrawer"
import { getData } from "../config/firebaseMethod";
import { Box } from "@mui/material";

export const TeacherList = () => {
    const [allData, setAllData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        await getData('teacher',setAllData,setLoading)
    };


    useEffect(() => {
        fetchData();
    }, []);

    return <>
        <BADrawer />
        {loading ? (
        <h2 className="d-flex justify-content-center align-items-center">
          Loading
        </h2>
      ) : (
        <Box className="container p-3">
            <table className="table table-striped border p-2">
              <thead>
                <tr>
                  <th className="p-3 fs-5 border">Name</th>
                  <th className="p-3 fs-5 border">Last Name</th>
                  <th className="p-3 fs-5 border">Class</th>
                  <th className="p-3 fs-5 border">Age</th>
                  <th className="p-3 fs-5 border">CNIC</th>
                </tr>
                </thead>
          {allData.map((teacher: any, index: number) => (
                <tbody key={index}>
                  <tr>
                    <td className="p-3 border">{teacher.firstName}</td>
                    <td className="p-2 border">{teacher.lastName}</td>
                    <td className="p-2 border">{teacher.class}</td>
                    <td className="p-2 border">{teacher.age}</td>
                    <td className="p-2 border">{teacher.cnic}</td>
                  </tr>
                </tbody>
          ))}
          </table>
        </Box>
      )}
    </>
}