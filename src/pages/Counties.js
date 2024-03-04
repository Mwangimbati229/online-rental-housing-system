import React from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FetchCounties from "../components/FetchCounties";

export default function CountiesComponent() {
    return (
        <div className="Search">
            <Navbar/>
            <FetchCounties/>
            <Footer/>
        </div>
    );
}