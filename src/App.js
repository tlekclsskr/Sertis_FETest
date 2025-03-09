import Navbar from './components/navbar';
import Welcomepage from './pages/welcome';
import RegisterForm from './pages/form';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcomepage />}  />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
