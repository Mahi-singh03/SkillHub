import { useState, useEffect } from "react";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("user.user");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (typeof parsedData === "object" && parsedData !== null) {

          setProfile(parsedData);
        } else {
          setError("Invalid profile data format.");
        }
      } else {
        setError("No profile data found.");
      }
    } catch (err) {
      setError("Error loading profile data.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64">
    <p className="text-center text-gray-500">Loading Profile...</p>
  </div>;

  if (error) return <div className="flex justify-center items-center h-64">
    <p className="text-center text-red-500">{error}</p>
  </div>;

  if (!profile || Object.keys(profile).length === 0) return <div className="flex justify-center items-center h-64">
    <p className="text-center text-gray-500">No profile data available</p>
  </div>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
      <div> Full Name: {profile.fullName} </div>
      <div> Email: {profile.email}</div>
      <div> Phone: {profile.phone}</div>
      <div> Address: {profile.address}</div>
      <div> City: {profile.city}</div>
      <div> State: {profile.state}</div>
      <div> Zip: {profile.zip}</div>
    </div>
  );
};

export default ProfileCard;
