import { Dropdown } from 'react-bootstrap';
import { useFetchGet } from '../../hooks/useFetchGet';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../actions/signIn';
import { useDispatch } from 'react-redux';
import { SERVER } from '../../constants/CompaniesLogo';
export function NavBar() {
  const navigate = useNavigate();
  const isLogged = useSelector(state => state);
  const { fetchData } = useFetchGet();
  const dispatch = useDispatch(); 
  const handleLogout = async () => {
    try {
      await fetchData('logout');
      dispatch(signIn());
      localStorage.removeItem("isLogged");
      localStorage.removeItem("skills");
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <span className="d-md-block ps-2">
            {isLogged ? (
              <Dropdown align="end">
                <Dropdown.Toggle className="nav-link nav-profile d-flex align-items-center pe-0" id="dropdown-basic">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/700/700674.png" 
                    alt="Profile" 
                    className="rounded-circle" 
                  />
                  <span className="d-md-block ps-2">{localStorage.getItem('firstname')[0]}.{localStorage.getItem('lastname')}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-arrow profile">
                  <Dropdown.ItemText>
                    <h6>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')} </h6>
                    <span>{localStorage.getItem('role')}</span>
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
             <span> <a href="/login">Sign-in</a> | <a href="/Register">Sign up</a></span>
            )}
          </span>
        </li>
      </ul>
    </nav>
  );
}
