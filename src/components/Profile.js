import React, { useEffect, useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      setError("Please log in to view profile details.");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfile();
  }, [userId]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!profile) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <img src={profile.image} alt={`${profile.firstName} ${profile.lastName}`} />
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>First Name:</strong> {profile.firstName}</p>
      <p><strong>Last Name:</strong> {profile.lastName}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
    </div>
  );
}
