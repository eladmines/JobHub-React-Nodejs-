import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';
import './assets/css/style.css';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';

import { TopBar } from './components/TopBar/TopBar.js';
import { SideBar } from './components/SideBar/SideBar.js';
import { DashBoard } from './pages/DashBoard.js';
import { Jobs } from './pages/jobs.js';
import { SavedJobs } from './pages/savedJobs.js';
import { Login } from './pages/login.js';
import { Register } from './pages/Register.js';
import {Applications} from './pages/applications.js'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  // Conditionally rendering TopBar and SideBar only if not on login/register
  const showNavigation = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div>
      {/* Render TopBar and SideBar only once if not on login/register */}
      {showNavigation && (
        <>
          <TopBar />
          <SideBar />
        </>
      )}

      {/* Page content will be wrapped in a separate div for different routes */}
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/savedjobs" element={<SavedJobs />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
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
