import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import DoctorCard from './DoctorCard';
import './SearchPage.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const doctors = [
  {
    name: "Dr. Rohan Mehta",
    specialty: "Pediatrician",
    description: "Id placerat tacimates definitionem sea, prima quidam vim no.",
    rating: 4,
    reviews: 145,
    image: "assets/images/doc3.png",
    type: "doctor",
    location: { lat:20.2962, lng: 85.8255 },
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    reviews: 200,
    image: "assets/images/doc1.png",
    type: "doctor",
    location: { lat: 20.764620, lng: 85.108597  },
  },
  {
    name: "Dr. Lily Singh",
    specialty: "Cardiologist",
    description: "Comprehensive health services for the entire family.",
    rating: 3,
    reviews: 120,
    image: "assets/images/doc2.png",
    type: "clinic",
    location: { lat: 19.800440, lng: 85.826752 },
  },
  {
    name: "Dr. Neha Agarwal",
    specialty: "Opthalmologist",
    description: "Comprehensive health services for the entire family.",
    rating: 4,
    reviews: 180,
    image: "assets/images/doc2.png",
    type: "clinic",
    location: { lat: 19.891100, lng: 86.099998 },
  },
  {
    name: "Dr. Varun Jain",
    specialty: "Orthopedist",
    description: "Id placerat tacimates definitionem sea, prima quidam vim no.",
    rating: 3,
    reviews: 100,
    image: "assets/images/doc3.png",
    type: "doctor",
    location: { lat:20.462521, lng: 85.882988 },
  },
  // Other doctors and clinics omitted for brevity
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('term');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const results = doctors.filter(doctor =>
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchTerm]);

  const handleBookAppointment = (appointment) => {
    const newAppointments = [...appointments, appointment];
    setAppointments(newAppointments);
    navigate('/appointments', { state: { appointments: newAppointments } });
  };

  const center = filteredDoctors.length ? filteredDoctors[0].location : { lat: 20.5937, lng: 78.9629 };

  return (
    <div className="search-page">
      <div className="map-section">
        <LoadScript googleMapsApiKey="AIzaSyAOY_vyWkNwslsw2Go5r2wC9lVMoF-aJcE">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {filteredDoctors.map((doctor, index) => (
              <Marker
                key={index}
                position={doctor.location}
                title={doctor.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="doctor-list">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} onBookAppointment={handleBookAppointment} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
