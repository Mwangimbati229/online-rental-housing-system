import react from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Apartments from "../components/Apartments";


export default function Apartments() {
    return (
        <div className="Search">
            <Navbar/>
            <Apartments/>
            <Footer/>
        </div>
    );
}