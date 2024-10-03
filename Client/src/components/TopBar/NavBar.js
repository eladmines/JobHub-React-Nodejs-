export function NavBar() {
    return (
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              {/* Content for the profile link can go here */}
            </a>
            <a href="/login">
              <span className="d-none d-md-block ps-2">Login</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  