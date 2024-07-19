import {DataSnapshot, get, getDatabase, push, ref, set} from "firebase/database";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
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


  const auth = getAuth(app);


  
  // export const login = (email:string, password:string) =>{
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((res)=>{
  //         console.log(res);
  //     }).catch((err)=>{
  //         console.log(err);
  //     })
  // }
  
  export const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };


  
  export const signup = (email:string, password:string) =>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
  }



