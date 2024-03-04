import React from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Landing from "../layout/Landing";

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    );
}