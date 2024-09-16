export function ProfileHeaderItem(props){
    return (
        <li className="dropdown-header">
        <h6>{props.name}</h6>
        <span>{props.role}</span>
    </li>
    )
}