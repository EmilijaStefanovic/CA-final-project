import Navigation from './components/Organisms/Navigation/Navigation';
import ClientRegistrationForm from './components/ClientRegistrationForm/ClientRegistrationForm';
import ClientList from './components/ClientList/ClientList';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Organisms/Profile/Profile';
import RegistrationForm from './components/Organisms/RegistartionForm/RegistrationForm';
import SignInForm from './components/Organisms/SignInForm/SignInForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [clients, setClients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/auth/signin');
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path='/newClient'
          element={<ClientRegistrationForm setClients={setClients} />}
        />
        <Route
          path='/clients'
          element={<ClientList clients={clients} setClients={setClients} />}
        />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth'>
          <Route path='signup' element={<RegistrationForm />} />
          <Route path='signin' element={<SignInForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
