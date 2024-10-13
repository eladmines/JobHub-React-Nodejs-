export function ComponentNavItem(props){
    return (
     
      <a href={props.link}><li className="list-group-item d-flex align-items-center">
            <i className="bi bi-circle me-2"></i>
            <span>{props.name}</span>
        </li></a>
    )
}