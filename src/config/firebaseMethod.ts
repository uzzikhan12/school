import {DataSnapshot, get, getDatabase, push, ref, set} from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);

export const sendData =async (nodeName:string,data:any) => {
        const newRef = ref(db, nodeName);
        const newDataRef = push(newRef);
        await set(newDataRef, data);
}



export const getData = async (tableName: string,setData:any ,setLoading:any ) => {
    try {
      const studentsRef = ref(db, tableName);
      const snapshot: DataSnapshot = await get(studentsRef);

      if (snapshot.exists()) {
        let studentsData: any[] = [];
        snapshot.forEach((childSnapshot) => {
          studentsData.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        setData(studentsData);
      } else {
        console.log('No data available');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };








