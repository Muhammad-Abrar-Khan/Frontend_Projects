import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import MakZoneImage from '../assets/images/MakZone.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for showing/hiding password
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={MakZoneImage} alt="MakZone" />
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl ">Sign in to account</h3>
        <p className="text-gray-500">Enter your email & password to login</p>

        <p className="text-gray-700 mt-7">Email Address</p>
        <form onSubmit={handleLogin}>
          <InputField
            type="email"
            placeholder="test123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <p className="text-gray-700 mt-3">Password</p>
            {showPassword ? (
              <InputField
                type="text"
                placeholder="Test@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <InputField
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-6 right-2 mt-2 mr-2 text-sm text-blue-600 "
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* <div className="flex items-baseline justify-between"> */}
            <Button type="submit" text="Login" className=""/>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-sm text-blue-600 "
            >
              Create account
            </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
