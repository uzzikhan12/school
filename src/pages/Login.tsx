import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/firebaseMethod";
import { Box } from "@mui/material";
import { BAInput } from "../components/BAInput";
import BAButton from "../components/BAButton";

export const Login: React.FC = () => {
    const [model, setModel] = useState<{ email: string, password: string }>({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        return password.length >= 6;
    };

    const signinUser = async () => {
        setError(null);

        if (!isEmailValid(model.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!isPasswordValid(model.password)) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            await login(model.email, model.password);
            navigate("/home");
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid email or password.");
        }
    };

    return (
        <Box className="d-flex justify-content-center align-items-center vh-100 m-auto flex-column">
            <div className="text-center py-2 rounded" style={{ backgroundColor: "darkcyan", height: "60vh" }}>
                <h1 className="text-white mb-3">Login</h1>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div style={{ padding: 10 }}>
                    <BAInput
                        type="text"
                        label="Email"
                        value={model.email}
                        onChange={(e:any) => setModel({ ...model, email: e.target.value })}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <BAInput
                        label="Password"
                        type="password"
                        value={model.password}
                        onChange={(e:any) => setModel({ ...model, password: e.target.value })}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <BAButton onClick={signinUser} label="Login" className="bg-white text-black fw-semibold" />
                </div>
                <div style={{ padding: 10 }}>
                    <p className="text-white">Don't have an account? <span style={{ color: "darkblue", cursor: "pointer" }} onClick={() => navigate("/signup")}>Click here</span> to signup</p>
                </div>
            </div>
        </Box>
    );
};
