import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { logout } from '../../services/logout';
import { useFetchGet } from '../../hooks/useFetchGet';
import { useSelector } from 'react-redux';
export function NavBar() {
  const isLogged = useSelector(state => state);
  
  const { data: names, loading, error ,fetchData} = useFetchGet();
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setAuthenticated(false);
      localStorage.removeItem("isLogged")
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <span className="d-none d-md-block ps-2">
            {isLogged ? ( // Check the authenticated state
              <Dropdown align="end">
                <Dropdown.Toggle className="nav-link nav-profile d-flex align-items-center pe-0" id="dropdown-basic">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/700/700674.png" 
                    alt="Profile" 
                    className="rounded-circle" 
                  />
                  <span className="d-none d-md-block ps-2">E.MINES</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-arrow profile">
                  <Dropdown.ItemText>
                    <h6>Elad Mines</h6>
                    <span>FULL STACK DEVELOPER</span>
                  </Dropdown.ItemText>

                  <Dropdown.Divider />

                  <Dropdown.Item href="users-profile.html" className="d-flex align-items-center">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item href="users-profile.html" className="d-flex align-items-center">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item href="pages-faq.html" className="d-flex align-items-center">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item onClick={handleLogout} className="d-flex align-items-center">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <a href="/login">Login</a>
            )}
          </span>
        </li>
      </ul>
    </nav>
  );
}
