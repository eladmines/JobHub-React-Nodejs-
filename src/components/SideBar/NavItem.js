import {ComponentNavItem} from './ComponentNavItem'
export function NavItem(props){
 return (
    <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target={"#" + props.target} data-bs-toggle="collapse" href="#">
        <i class={props.class}></i><span>{props.name}</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id={props.target} class="nav-content collapse " data-bs-parent="#sidebar-nav"> 
        {props.menu.map((item) => (
            <ComponentNavItem name={item}/>
        ))}
        
        </ul>
    </li>
 )
}
