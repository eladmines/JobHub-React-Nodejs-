import { ProfileHeaderItem } from "./ProfileNavBar/ProfileHeaderItem"
import {ProfileItem} from "./ProfileNavBar/ProfileItem"
export function NavBar(){
    return (
    <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">

    <li className="nav-item d-block d-lg-none">
        <a className="nav-link nav-icon search-bar-toggle" href="#">
        <i className="bi bi-search"></i>
        </a>
    </li>

    <li className="nav-item dropdown">

        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
            You have 4 new notifications
            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-warning"></i>
            <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
            <i className="bi bi-x-circle text-danger"></i>
            <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
            <i className="bi bi-check-circle text-success"></i>
            <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
            <i className="bi bi-info-circle text-primary"></i>
            <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
            <a href="#">Show all notifications</a>
        </li>

        </ul>

    </li>

    <li className="nav-item dropdown">

        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
            You have 3 new messages
            <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
            <a href="#">
            <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
            <div>
                <h4>Maria Hudson</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>4 hrs. ago</p>
            </div>
            </a>
        </li>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
            <a href="#">
            <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
            <div>
                <h4>Anna Nelson</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>6 hrs. ago</p>
            </div>
            </a>
        </li>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
            <a href="#">
            <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
            <div>
                <h4>David Muldon</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>8 hrs. ago</p>
            </div>
            </a>
        </li>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
            <a href="#">Show all messages</a>
        </li>

        </ul>

    </li>

    <li className="nav-item dropdown pe-3">
        <a href="/login"><span>Login </span></a>
        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFF0VT-XUvCvg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699855179024?e=1732147200&v=beta&t=SP4TuAm64iWVIIOWI6eogyZLadYFr1mRgqqgDaL6P-k" alt="Profile" className="rounded-circle" />

        <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <ProfileHeaderItem name="elad" role="software"/>
        <li>
            <hr className="dropdown-divider" />
        </li>

        <ProfileItem Icon = "bi bi-person" ButtonName="My Profile" />
        
        <li>
            <hr className="dropdown-divider" />
        </li>
        <ProfileItem Icon = "bi bi-gear" ButtonName="Account Settings" />
        <li>
            <hr className="dropdown-divider" />
        </li>
        <ProfileItem Icon = "bi bi-question-circle" ButtonName="Need Help?" />
        <li>
            <hr className="dropdown-divider" />
        </li>
        <ProfileItem Icon = "bi bi-box-arrow-right" ButtonName="Sign Out" />

        </ul>
    </li>

    </ul>
    </nav>
    )
}