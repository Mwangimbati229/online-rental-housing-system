import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "../App.css";
import Swal from "sweetalert2";

export default function AddApartmentForm() {
    const [apartment, setApartment] = useState({
        description: "",
        county: "",
        price: "",
        bedrooms: "",
        images: [],
        is_available: true
    });

    const handeClick = (event) => {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted',
            text: 'Thank you for your submission!',
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("/add-apartment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    description: apartment.description,
                    address: apartment.address,
                    county: apartment.county,
                    price: apartment.price,
                    images: apartment.images,
                    bedrooms: apartment.bedrooms,
                    is_available: apartment.is_available
                }
            ),
        })
            .then((response) => response.json())
            .then((data) => {
                setApartment({
                    description: "",
                    address: "",
                    county: "",
                    price: "",
                    bedrooms: "",
                    images: [],
                    is_available: true
                });

                console.log("Apartment added:", data);
            })
            .catch((error) => {
                console.error("Error adding apartment:", error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="add-container-form">
                <h1 className="text-center mt-5">Add Apartment Listing</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="description">Apartment Description:</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            value={apartment.description}
                            onChange={(e) => setApartment({ ...apartment, description: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={apartment.address}
                            onChange={(e) => setApartment({ ...apartment, address: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bedrooms">Bedrooms:</label>
                        <textarea
                            type="number"
                            className="form-control"
                            id="bedrooms"
                            value={apartment.bedrooms}
                            onChange={(e) => setApartment({ ...apartment, bedrooms: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="county">County:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="county"
                            value={apartment.county}
                            onChange={(e) => setApartment({ ...apartment, county: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={apartment.price}
                            onChange={(e) => setApartment({ ...apartment, price: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="images">Apartment Images:</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="images"
                            multiple
                            onChange={(e) => setApartment({ ...apartment, images: e.target.files })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="is_available">Available:</label>
                        <select
                            className="form-control"
                            id="is_available"
                            value={apartment.is_available}
                            onChange={(e) => setApartment({ ...apartment, is_available: e.target.value })}
                        >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={handeClick}>
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
