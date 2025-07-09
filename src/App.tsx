import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import SplashPage from './pages/splash';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SplashPage />}
        />
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
