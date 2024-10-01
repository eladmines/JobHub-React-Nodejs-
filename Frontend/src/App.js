import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';
import './assets/css/style.css';

import { TopBar } from './components/TopBar/TopBar';
import { SideBar } from './components/SideBar/SideBar';
import { DashBoard } from './pages/DashBoard';
import { Jobs } from './pages/jobs';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <TopBar />
      {/* Render SideBar only if the path is not /register */}
      {(location.pathname !== '/Register' && location.pathname !== '/login') && <SideBar />}

      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

// Wrap your App component with Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
