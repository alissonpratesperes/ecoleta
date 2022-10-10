import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Point from "./pages/Point";

    const Routing = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                            element={ <Home/> }
                    />
                    <Route
                        path="/point"
                            element={ <Point/> }
                    />
                </Routes>
            </BrowserRouter>
        );
    };

        export default Routing;