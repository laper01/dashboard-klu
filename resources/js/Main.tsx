// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/Components/ProtectedRoute";
import Dashboard from "@/Pages/Dashboard";
import GuestRoute from "@/Components/GuestRoute";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element= {<GuestRoute element={ <Login canResetPassword={false} />}  /> } />
            </Routes>
        </AuthProvider>
    );
};

export default App;