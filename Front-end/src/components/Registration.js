import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    emailAddress: '',
    phoneNumber: '',
    selectedCourse: '',
    address: '',
    qualification: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate('/');  // If user is logged in, redirect them to homepage
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, fatherName, emailAddress, phoneNumber, selectedCourse, address, qualification, password } = formData;
    if (!fullName.trim()) return 'Full name is required.';
    if (!fatherName.trim()) return 'Father\'s name is required.';
    if (!/\S+@\S+\.\S+/.test(emailAddress)) return 'Please enter a valid email address.';
    if (!phoneNumber.trim()) return 'Phone number is required.';
    if (!selectedCourse.trim()) return 'Please select a course.';
    if (!address.trim()) return 'Address is required.';
    if (!qualification.trim()) return 'Please select a qualification.';
    if (password.length < 6) return 'Password must be at least 6 characters long.';
    return null;
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/Registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send formData as JSON
      });

      const data = await response.json();

      if (response.ok) {
        // If registration is successful, store user data and registration status in localStorage
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('isRegistered', 'true'); // Store registration status
        window.dispatchEvent(new Event('storage'));
        navigate('/', { replace: true });  // Redirect to home page after successful registration
      } else {
        setError(data.message || 'Failed to register. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);  // Set loading to false once the request is completed
    }
  };

  const courses = ['Course 1', 'Course 2', 'Course 3'];
  const qualifications = ['10th', '12th', 'Graduated'];

  return (
    <div>
      <h1 className="text-center main_heading">Register yourself</h1>
      <form onSubmit={handleRegistration} className="registration-form responsive">
        <h1>Please enter your details</h1>

        {/* Full Name Field */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} id="fullName" required />
        </div>

        {/* Father's Name Field */}
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} id="fatherName" required />
        </div>

        {/* Email Address Field */}
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} id="emailAddress" required />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} id="phoneNumber" required />
        </div>

        {/* Course Selection Field */}
        <div className="form-group">
          <label htmlFor="selectedCourse">Course</label>
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleInputChange} id="selectedCourse" required>
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} id="address" required />
        </div>

        {/* Qualification Field */}
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <select name="qualification" value={formData.qualification} onChange={handleInputChange} id="qualification" required>
            <option value="">Select a qualification</option>
            {qualifications.map((qual) => (
              <option key={qual} value={qual}>{qual}</option>
            ))}
          </select>
        </div>

        {/* Password Field */}
        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} id="password" required />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="toggle-password1"
            >
              {showPassword ? <span>&#x1F441;</span> : <span>&#x1F576;</span>}
            </button>
          </div>
        </div>

        {/* Display error message if any */}
        {error && <div className="error-message">{error}</div>}

        {/* Submit Button */}
        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </div>

        {/* Login Redirect */}
        <div className="login-redirect">
          <span>Already have an account? <Link to="/Login">Log In</Link></span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
