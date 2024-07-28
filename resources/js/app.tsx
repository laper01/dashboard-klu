import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import "./bootstrap";
import "../css/app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/Components/theme-provider";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <ThemeProvider
                        defaultTheme="light"
                        storageKey="vite-ui-theme"
                    >
                        <Main />
                    </ThemeProvider>
                </Router>
            </QueryClientProvider>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
