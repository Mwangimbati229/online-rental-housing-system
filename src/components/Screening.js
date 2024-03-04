import React, { useState } from "react";
import "../App.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Swal from "sweetalert2";

export default function Screening() {
    const [formData, setFormData] = useState({
        fullName: "",
        dateOfBirth: "",
        socialSecurityNumber: "",
        currentAddress: "",
        previousAddress: "",
        phoneNumber: "",
        email: "",
        currentEmployer: "",
        occupation: "",
        monthlyIncome: "",
        lengthOfEmployment: "",
        bankAccountDetails: "",
        employerReference: "",
        previousLandlordReference: "",
        previousRentalHistory: "",
        evictionHistory: "",
        criminalHistory: "",
        creditHistory: "",
        specialAccommodation: "",
        consentToChecks: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };
    
    const handleClick = (e) => {
        e.preventDefault();
        
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted',
            text: 'Thank you for your submission!',
        })
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div>
            <Navbar />
            <div className="screening-form-container">
                <h1 className="text-center">Tenant Screening Form</h1>
                <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentAddress">Current Address:</label>
                        <input type="text" id="currentAddress" name="currentAddress" value={formData.currentAddress} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="previousAddress">Previous Address:</label>
                        <input type="text" id="previousAddress" name="previousAddress" value={formData.previousAddress} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    {/* Employment Information */}
                    <div className="form-group">
                        <label htmlFor="currentEmployer">Current Employer:</label>
                        <input type="text" id="currentEmployer" name="currentEmployer" value={formData.currentEmployer} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation:</label>
                        <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="monthlyIncome">Monthly Income:</label>
                        <input type="text" id="monthlyIncome" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lengthOfEmployment">Length of Employment:</label>
                        <input type="text" id="lengthOfEmployment" name="lengthOfEmployment" value={formData.lengthOfEmployment} onChange={handleChange} required />
                    </div>

                    {/* References */}
                    <div className="form-group">
                        <label htmlFor="employerReference">Employer Reference:</label>
                        <input type="text" id="employerReference" name="employerReference" value={formData.employerReference} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="previousLandlordReference">Previous Landlord Reference:</label>
                        <input type="text" id="previousLandlordReference" name="previousLandlordReference" value={formData.previousLandlordReference} onChange={handleChange} />
                    </div>

                    {/* Rental History */}
                    <div className="form-group">
                        <label htmlFor="previousRentalHistory">Previous Rental History:</label>
                        <input type="text" id="previousRentalHistory" name="previousRentalHistory" value={ formData.previousRentalHistory} onChange={handleChange} />
                    </div>

                    <button type="submit" onClick={handleClick}>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

