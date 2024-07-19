import { Box } from '@mui/material';
import BADrawer from '../components/BADrawer';
import BASelect from '../components/BASelect';
import { useEffect, useState } from 'react';
import { getData } from '../config/firebaseMethod';

export const SubjectList = () => {
  const [allData, setAllData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [filteredSubjects, setFilteredSubjects] = useState<any[]>([]);

  const fetchData = async () => {
    // setLoading(true);
    await getData('subject', setAllData, setLoading);
  };

  useEffect(() => {
      fetchData();
  }, []);

  const handleClassChange = (event:any) => {
    const selectedClass = event.target.value as string;
    setSelectedClass(selectedClass);

    const filtered = allData.filter((e) => e.class == selectedClass);
    setFilteredSubjects(filtered);
  };


  return (
    <>
      <BADrawer />

      <Box className="w-50 m-auto">
        <BASelect
          onChange={handleClassChange}
          label="Class"
          values={['5', '6', '7', '8', '9', '10']}
        />
        <h3>Subjects:</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((sub: any, ind: number) => (
                <Box>
                <li key={ind}>{sub.sub1}</li>
                <li key={ind}>{sub.sub2}</li>
                <li key={ind}>{sub.sub3}</li>
                <li key={ind}>{sub.sub4}</li>
                <li key={ind}>{sub.sub5}</li>
                <li key={ind}>{sub.sub6}</li>
                </Box>
              ))
            ) : (
              <p>No subjects available for the selected class.</p>
            )}
          </ul>
        )}
      </Box>
    </>
  );
};

