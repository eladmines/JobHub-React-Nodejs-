import logo from './logo.svg';
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css';
import './assets/css/style.css';

// Import Vendor JS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



// Import Template Main JS File
//import './assets/js/main.js'; // Custom JS


import {TopBar} from './components/TopBar/TopBar'
import {SideBar} from './components/SideBar/SideBar'
import {DashBoard} from './pages/DashBoard'
function App() {
  return (
    <div className="App">
      <TopBar/>
      <SideBar/>
      <DashBoard/>
    </div>
  );
}


export default App;
