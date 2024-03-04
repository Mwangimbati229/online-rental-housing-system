import react from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import AddApartmentForm from "../components/AddApartmentForm";

export default function AddApartment() {
    return (
        <div className="AddApartment">
            <Navbar/>
            <AddApartmentForm/>
            <Footer/>
        </div>
    );
}