import React from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Screening from "../components/Screening";

export default function ScreeningPage() {
    return (
        <div>
            <Navbar/>
            <Screening/>
            <Footer/>
        </div>
    );
}