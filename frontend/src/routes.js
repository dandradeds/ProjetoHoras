import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Config from "./pages/config/projetos";
import Home from "./pages/home";
import Calendar from "./components/googleCalendar";
import Pessoas from "./pages/config/pessoas";
import Projetos from "./pages/config/projetos";

export default function Rotas() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/config" exact element={<Config />} />
                    <Route path="/calendar" exact element={<Calendar />} />
                    <Route path="/pessoas" exact element={<Pessoas />} />
                    <Route path="/projetos" exact element={<Projetos />} />
                </Routes>
        </BrowserRouter>
    );
}