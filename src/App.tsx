import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vkminiapps" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
