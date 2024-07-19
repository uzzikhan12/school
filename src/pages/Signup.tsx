import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "../config/firebaseMethod";
import { Box } from "@mui/material";
import { BAInput } from "../components/BAInput";
import BAButton from "../components/BAButton";

export const SignUp =() => {
    const [model, setModel] = useState<any>({})
    const navigate = useNavigate();

    const signUpUser = () => {
        signup(model.email, model.password)
        navigate("/login")
    }
    
    return <>
    
    <Box className="d-flex justify-content-center align-items-center vh-100 m-auto flex-column">
    <div className="text-center py-2 rounded" style={{backgroundColor:"darkcyan",height:"60vh"}}>
        <h1 className="text-white">SignUp</h1>
        
        <div style={{paddingTop:20,paddingLeft:20,paddingRight:20}}>
            <BAInput label="Email"
                type="email"
                value={model.email}
                onChange={(e:any) => setModel({...model, email: e.target.value})}
            />
        </div>

        <div style={{padding:20}}>
            <BAInput label="Password"
                type="password"
                value={model.password}
                onChange={(e:any) => setModel({...model, password: e.target.value})}
            />
        </div>

        <div style={{padding:10}}>
            <BAButton onClick={signUpUser} label="Signup" className="bg-white text-black fw-semibold"/>
        </div>

        <div style={{padding:10}}>
            <p className="text-white">Already have an account <span style={{color:"darkblue"}} onClick={()=>{navigate("/login")}}>click here</span> to login</p>
        </div>
    </div>
    </Box>
    </>
}