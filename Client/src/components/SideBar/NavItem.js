import { ComponentNavItem } from './ComponentNavItem';

export function NavItem(props) {
  return (
    
    <li className="nav-item">
    <a 
      className="nav-link collapsed" 
      data-bs-target={"#" + props.target} 
      data-bs-toggle="collapse" 
      href="/"
    >
      {/* Icon next to the button */}
      <i className={props.icon}></i> {/* Icon next to button */}
      <span>{props.name}</span> 
      <i className="bi bi-chevron-down ms-auto"></i> {/* Existing down arrow */}
    </a>
    <ul 
      id={props.target} 
      className="nav-content collapse" 
      data-bs-parent="#sidebar-nav"
    >
      {props.menu.map((item, index) => (
        <ComponentNavItem key={index} name={item[0]} link={item[1]} />
      ))}
    </ul>
  </li>
  
  );
}
