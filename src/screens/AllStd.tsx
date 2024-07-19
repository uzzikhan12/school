import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import BADrawer from "../components/BADrawer";
import {  getData } from "../config/firebaseMethod";


export const AllStd = () => {
  const [allData, setAllData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    await getData('students',setAllData,setLoading)
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
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
                  <th className="p-3 fs-5 border">Section</th>
                </tr>
                </thead>
          {allData.map((student: any, index: number) => (
                <tbody key={index}>
                  <tr>
                    <td className="p-3 border">{student.firstName}</td>
                    <td className="p-2 border">{student.lastName}</td>
                    <td className="p-2 border">{student.stdClass}</td>
                    <td className="p-2 border">{student.section}</td>
                  </tr>
                </tbody>
          ))}
          </table>
        </Box>
      )}
    </>
  );
};
