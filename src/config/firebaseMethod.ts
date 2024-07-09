import { collection, getDocs, getFirestore } from "firebase/firestore";
import { child, get, getDatabase, onValue, push, ref, set} from "firebase/database";
import app from "./firebaseConfig";
import { useEffect } from "react";


const db = getDatabase(app);
const dbStore = getFirestore(app);

export const sendData = (nodeName:string,data:any) => {
    return new Promise ((resolve,reject)=>{
        data.id = push(ref(db, `${nodeName}`)).key;
        const refrence = ref(db, `${nodeName} / ${data.id}`)
        set(refrence,data)
        .then(()=>{
            resolve(data);
        })
        .catch((error)=>{
            reject(error);
        })
    })
}



export const getData = async (nodeName: string, id?: any) => {
  try {
  const dbRef = ref(getDatabase(), 'students');
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const studentsList = snapshot.val();
    const studentsArray = Object.keys(studentsList).map(key => ({
      id: key,
      ...studentsList[key]
    }));
    console.log(studentsArray,"ASDD");
  } else {
    console.log("No data available");
  }
} catch (error) {
  console.error("Error fetching students data: ", error);
}
    // return new Promise ((resolve,reject)=> {
    //     const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    //     onValue(reference, (dt) => {
    //         if (dt.exists()) {
    //                 resolve(dt.val());
    //                 console.log(dt.val());
    //         }else{
    //             reject({message : "Data not found"});
    //         }
    //     });
    // })
};








// const [students, setStudents] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "students"));
//       const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setStudents(studentsList);
//     } catch (error) {
//       console.error("Error fetching students data: ", error);
//     }
//   };

//   fetchData();
// }, []);

// import { db } from "./firebase"; // Adjust the path according to your project structure







// export const getData = (nodeName: string, id?: string): Promise<any> => {
//     return new Promise((resolve, reject) => {
//       const reference = ref(db, `${nodeName}/${id ? id : ""}`);
//       console.log(`Fetching data from: ${nodeName}/${id ? id : ""}`); // Debugging line
//       onValue(reference, (snapshot) => {
//         if (snapshot.exists()) {
//           console.log('Data fetched successfully:', snapshot.val()); // Debugging line
//           resolve(snapshot.val());
//         } else {
//           console.log('Data not found'); // Debugging line
//           reject(new Error("Data not found"));
//         }
//       }, (error) => {
//         console.error('Error fetching data:', error); // Debugging line
//         reject(error);
//       });
//     });
//   };
