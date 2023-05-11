import Navigation from './components/Navigation/Navigation';
import ClientRegistrationForm from './components/ClientRegistrationForm/ClientRegistrationForm';
import ClientList from './components/ClientList/ClientList';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import RegistrationForm from './components/RegistartionForm/RegistrationForm';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/newClient' element={<ClientRegistrationForm />} />
        <Route path='/clients' element={<ClientList />} />
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
