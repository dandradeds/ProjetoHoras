import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Config from "./pages/config";
import Home from "./pages/home";
import Calendar from "./components/googleCalendar";


export default function Rotas() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/config" exact element={<Config />} />
                    <Route path="/calendar" exact element={<Calendar />} />
                </Routes>
        </BrowserRouter>
    );
}