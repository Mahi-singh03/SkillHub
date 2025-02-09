import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    emailAddress: '',
    phoneNumber: '',
    dateOfBirth: '',
    selectedCourse: '',
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
      case 'address':
        error = value.trim() ? '' : `${name.replace(/([A-Z])/g, ' $1')} is required.`;
        break;
      case 'emailAddress':
        error = /\S+@\S+\.\S+/.test(value) ? '' : 'Enter a valid email.';
        break;
      case 'phoneNumber':
        error = value.trim() ? '' : 'Phone number is required.';
        break;
      case 'dateOfBirth':
        error = value ? '' : 'Date of Birth is required.';
        break;
      case 'selectedCourse':
      case 'qualification':
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

  return (
    <div className="registration-container">
      <form onSubmit={handleRegistration} className="registration-form responsive">
        <h3 className="heading">Students Registration</h3>

        {Object.entries(formData).map(([key, value]) => (
          key !== 'password' && key !== 'selectedCourse' && key !== 'qualification' && (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={key === 'emailAddress' ? 'email' : key === 'dateOfBirth' ? 'date' : 'text'}
                name={key}
                value={value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                id={key}
                required
              />
              {errors[key] && <div className="error-message">{errors[key]}</div>}
            </div>
          )
        ))}

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

        {/* Qualification Selection */}
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <select name="qualification" value={formData.qualification} onChange={handleInputChange} onBlur={handleBlur} required>
            <option value="">Select Qualification</option>
            {qualifications.map((qualification) => (
              <option key={qualification} value={qualification}>{qualification}</option>
            ))}
          </select>
          {errors.qualification && <div className="error-message">{errors.qualification}</div>}
        </div>

        {/* Password Field */}
        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
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
          </div>
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        {errors.general && <div className="error-message">{errors.general}</div>}

        <div className="form-actions">
          <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </div>

        <div className="login-redirect">
          <span>Already have an account? <Link to="/Login">Log In</Link></span>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Registration);
