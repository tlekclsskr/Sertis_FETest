import Navbar from './components/navbar';
import WelcomePage from './pages/welcome';
import RegisterPage from './pages/form';
import ConfirmationPage from './pages/confirm';
import SuccessPage from './pages/success';
import EditprofilePage from './pages/editprofile';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />}  />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/confirmation' element={<ConfirmationPage />} />
        <Route path='/editprofile'element={<EditprofilePage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
