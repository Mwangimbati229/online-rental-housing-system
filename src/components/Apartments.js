import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Swal from 'sweetalert2';
import "../Css/Apartment.css";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const { county } = useParams();

  useEffect(() => {
    // Ensure that 'county' is defined before making the fetch request
    if (county) {
      fetch(`/counties/${county}/apartments`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            console.log("apartments:", data);
            setApartments(data);
          } else {
            console.log("No apartments found for the specified county.");
            setApartments([]);
          }
        })
        .catch(error => {
          console.error("Error fetching apartments:", error);
        });
    }
  }, [county]);

  

  const handleBookNow = (apartmentId, apartmentAddress) => {
    // Display SweetAlert confirmation dialog
    Swal.fire({
      title: 'Confirm Booking',
      text: `Do you want to book the apartment at ${apartmentAddress}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, book it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you can implement the booking logic
        console.log(`Booking apartment ${apartmentId}`);
        // Show success message with SweetAlert
        Swal.fire({
          title: 'Booking Confirmed',
          text: 'Your booking has been confirmed!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Apartments in {county}</h1>
      <div className="apartments-container">
        {apartments.length === 0 ? (
          <p>No apartments found for the specified county.</p>
        ) : (
          <div className="apartments-list">
            {apartments.map(apartment => (
              <div key={apartment.id} className="apartment-card">
                <h3>{apartment.address}</h3>
                <p>Bedrooms: {apartment.bedrooms}</p>
                <p>County: {apartment.county}</p>
                <p>Description: {apartment.description}</p>
                <img src={apartment.images} alt={`Apartment ${apartment.id}`} />
                <p>Price: ${apartment.price}</p>
                <p>Available: {apartment.is_available ? "Yes" : "No"}</p>
                <button onClick={() => handleBookNow(apartment.id, apartment.address)}>Book Now</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Apartments;
