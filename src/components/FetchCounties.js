import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function FetchCounties() {
  const navigate = useNavigate();

  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu",
    "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru",
    "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
    "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia",
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
    navigate(`/counties/${county}/apartments`);
  };

  return (
    <div className="counties-container">
      <h2>List of Counties</h2>
      <ul className="counties-list">
        {counties.map((county) => (
          <li key={county}>
            <button onClick={() => handleCountyClick(county)}>{county}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
