import { ComponentNavItem } from './ComponentNavItem';

export function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target={"#" + props.target} data-bs-toggle="collapse" href="#">
        <i className={props.class}></i>
        <span>{props.name}</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id={props.target} className="nav-content collapse" data-bs-parent="#sidebar-nav">
        {props.menu.map((item, index) => (
          <ComponentNavItem key={index} name={item} />
        ))}
      </ul>
    </li>
  );
}