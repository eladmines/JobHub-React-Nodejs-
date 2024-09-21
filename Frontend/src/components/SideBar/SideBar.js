import {NavItem} from './NavItem'
export function SideBar(){
    const JobsDropMenu = ["All Jobs","Saved Jobs"]
    const ApplicationsDropMenu = ["My Applications","Active Applications"]
    const ConnectionsDropMenu = ["My Connections"]
    const TasksDropMenu = ["My Tasks"]
    const MeetupsDropMenu = ["My Tasks"]
    return(
<aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">


  <li class="nav-item">
    <a class="nav-link " href="/">
      <i class="bi bi-grid"></i>
      <span>Dashboard</span>
    </a>
  </li>
  <NavItem name="Jobs" class="bi bi-menu-button-wide" target="jobs-nav" menu={JobsDropMenu}/>
  <NavItem name="Applications" class="bi bi-journal-text" target="applications-nav" menu={ApplicationsDropMenu}/>
  <NavItem name="Connections" class="bi bi-journal-text" target="connections-nav" menu={ConnectionsDropMenu}/>
  <NavItem name="Tasks" class="bi bi-menu-button-wide" target="tasks-nav" menu={TasksDropMenu}/>
  <NavItem name="Meetups" class="bi bi-journal-text" target="meetups-nav" menu={MeetupsDropMenu}/>
  <li class="nav-heading">Pages</li>

 

</ul>

</aside>
    )
}
