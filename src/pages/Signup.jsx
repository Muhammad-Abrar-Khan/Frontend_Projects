import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import MakZoneImage from '../assets/images/MakZone.png'; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // console.log(firstName, lastName, email, password);

    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={MakZoneImage} alt="MakZone" />

      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Create an account</h3>
        <form onSubmit={handleSignup}>
          <InputField
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-baseline justify-between">
            <Button type="submit" text="Signup" />
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-sm text-blue-600 hover:underline"
            >
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
