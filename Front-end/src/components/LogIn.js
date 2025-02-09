import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/'); // Redirect to home if the user is already logged in
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://skillhub-a286.onrender.com/loginS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store both user data and token
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        window.dispatchEvent(new Event('storage')); // Notify other components
        navigate('/', { replace: true });
      } else {
        setError(data.message || 'Failed to log in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <form className="L" onSubmit={handleLogin}>
        <h1 className='Head'>Login</h1>
        <div className="inset">
          <p>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />
          </p>
          <p className="password-container">
            <label htmlFor="password">PASSWORD</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </p>
        </div>
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading-message">Loading...</div>}
        <div className="forgot-password">
          <span onClick={() => alert('Redirect to forgot password page')}>
            Forgot password?
          </span>
        </div>
        <p className="p-container">
          <button type="submit" id="go" disabled={loading}>
            Log In
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
