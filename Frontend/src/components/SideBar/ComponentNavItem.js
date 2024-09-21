export function ComponentNavItem(props){
    return (
      <li>
      <a href="#">
        <i class="bi bi-circle"></i><span>{props.name}</span>
      </a>
    </li>
    )
}