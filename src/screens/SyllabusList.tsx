import { useEffect, useState } from "react"
import BADrawer from "../components/BADrawer"
import { getData } from "../config/firebaseMethod";
import BASelect from "../components/BASelect";
import { Box } from "@mui/material";

export const SyllabusList = () => {
    const [allData,setAllData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [filteredSubjects, setFilteredSubjects] = useState<any[]>([]);

    const fetchData = async() => {
        await getData("syllabus",setAllData,setLoading);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClassChange = (event:any) => {
        const selectedClass = event.target.value as string;
        setSelectedClass(selectedClass);

        const filtered = allData.filter((e:any) => e.class == selectedClass);
        setFilteredSubjects(filtered);
    };

    return<>
        <BADrawer />
        <Box className="w-50 m-auto">

          <BASelect
            onChange={handleClassChange}
            label="Class"
            values={['5', '6', '7', '8', '9', '10']}
           />

            {loading?(
                <p>Loading...</p>
            ) : ( <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Syllabus</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredSubjects.length > 0 ? (
                            filteredSubjects.map((e:any,key:any) =>(
                            <tr key={key}>
                                <td>{e.class}</td>
                                <td>{e.subject}</td>
                                <td>{e.syllabus}</td>
                            </tr>
                            ))
                        ): (
                                <p>No syllabus available for the selected class.</p>
                        )}
                        </tbody>
                </table>
            )}
        </Box>
    </>
} 