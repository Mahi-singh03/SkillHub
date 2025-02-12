import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    emailAddress: '',
    phoneNumber: '',
    dateOfBirth: '',
    aadharNumber: '',
    selectedCourse: '',
    courseDuration: '',
    address: '',
    qualification: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')) navigate('/');
  }, [navigate]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validateField = useCallback((name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
      case 'fatherName':
      case 'motherName':
      case 'address':
        error = value.trim() ? '' : `${name.replace(/([A-Z])/g, ' $1')} is required.`;
        break;
      case 'emailAddress':
        error = /\S+@\S+\.\S+/.test(value) ? '' : 'Enter a valid email.';
        break;
      case 'phoneNumber':
        error = value.trim() ? '' : 'Phone number is required.';
        break;
      case 'aadharNumber':
        error = /^[0-9]{12}$/.test(value) ? '' : 'Enter a valid 12-digit Aadhar number.';
        break;
      case 'dateOfBirth':
        error = value ? '' : 'Date of Birth is required.';
        break;
      case 'selectedCourse':
      case 'qualification':
      case 'courseDuration':
        error = value ? '' : `Please select a ${name.replace(/([A-Z])/g, ' $1')}.`;
        break;
      case 'password':
        error = value.length >= 6 ? '' : 'Password must be at least 6 characters long.';
        break;
      default:
        break;
    }
    return error;
  }, []);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setLoading(true);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    if (Object.values(newErrors).some((msg) => msg)) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://skillhub-a286.onrender.com/registrationForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/', { replace: true });
      } else {
        setErrors({ general: data.message || 'Registration failed.' });
      }
    } catch {
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const courses = ['HTML, CSS, JS', 'React', 'MERN FullStack', 'Autocad', 'CorelDRAW', 'Tally', 'Premier Pro', 'Wordpress', 'Computer Course', 'MS Office', 'PTE'];
  const qualifications = ['10th', '12th', 'Graduated'];
  const durations = ['3 months', '6 months', '1 year'];

  return (
    <div className="registration-container">
      <form onSubmit={handleRegistration} className="registration-form responsive">
        <h3 className="heading">Students Registration</h3>
        {Object.entries(formData)
          .filter(([key]) => key !== 'password' && 
                           key !== 'selectedCourse' && 
                           key !== 'qualification' && 
                           key !== 'courseDuration')
          .map(([key, value]) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={key === 'emailAddress' ? 'email' : 
                      key === 'dateOfBirth' ? 'date' : 'text'}
                name={key}
                value={value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                id={key}
                required
              />
              {errors[key] && <div className="error-message">{errors[key]}</div>}
            </div>
          ))}

      

        {/* Qualification Selection */}
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <select name="qualification" value={formData.qualification} onChange={handleInputChange} onBlur={handleBlur} required>
            <option value="">Select Qualification</option>
            {qualifications.map((qual) => (
              <option key={qual} value={qual}>{qual}</option>
            ))}
          </select>
          {errors.qualification && <div className="error-message">{errors.qualification}</div>}
        </div>

          {/* Course Selection */}
          <div className="form-group">
          <label htmlFor="selectedCourse">Selected Course</label>
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleInputChange} onBlur={handleBlur} required>
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {errors.selectedCourse && <div className="error-message">{errors.selectedCourse}</div>}
        </div>

        {/* Course Duration */}
        <div className="form-group">
          <label htmlFor="courseDuration">Course Duration</label>
          <select name="courseDuration" value={formData.courseDuration} onChange={handleInputChange} onBlur={handleBlur} required>
            <option value="">Select Duration</option>
            {durations.map((duration) => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
          {errors.courseDuration && <div className="error-message">{errors.courseDuration}</div>}
        </div>

        {/* Password Field - Last */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            id="password"
            required
          />
          <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="toggle-password1">
            {showPassword ? '👁' : '🔒'}
          </button>
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Registration);
