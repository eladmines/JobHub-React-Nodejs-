export function ProfileItem(props){
    return(
        <li>
            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className={props.Icon}></i>
            <span>{props.ButtonName}</span>
            </a>
        </li>
    )
}