import './App.css';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <SideBar />
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
