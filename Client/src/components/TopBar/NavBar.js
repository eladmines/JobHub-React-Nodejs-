import { useState, useEffect } from 'react';
import { useJwtValidation } from '../../hooks/useJwtValidation';
import { Dropdown } from 'react-bootstrap';
import { logout } from '../../services/logout';

export function NavBar() {
  const { isAuthenticated } = useJwtValidation();
  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      await logout();
      setAuthenticated(false);
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <span className="d-none d-md-block ps-2">
            {authenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle className="nav-link nav-profile d-flex align-items-center pe-0" id="dropdown-basic">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/700/700674.png" 
                    alt="Profile" 
                    className="rounded-circle" 
                  />
                  <span className="d-none d-md-block ps-2">K. Anderson</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-arrow profile">
                  <Dropdown.ItemText>
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
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
