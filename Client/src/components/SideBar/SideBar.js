
import { NavItem } from './NavItem';

export function SideBar() {
    const navItems = [
        { 
          name: "Jobs", 
          icon: "bi bi-briefcase", // Briefcase icon for Jobs
          target: "jobs-nav", 
          menu: [["All Jobs", "/jobs"], ["Saved Jobs", "/savedjobs"]]
        },
        { 
          name: "Applications", 
          icon: "bi bi-file-earmark-text", // File icon for Applications
          target: "applications-nav", 
          menu: [["My Applications", "/applications"]] 
        },
        { 
          name: "Connections", 
          icon: "bi bi-people", // People icon for Connections
          target: "connections-nav", 
          menu: [["My Connections", "/connections"]] 
        },
        { 
          name: "Tasks", 
          icon: "bi bi-check-square", // Check square icon for Tasks
          target: "tasks-nav", 
          menu: [["My Tasks", "/tasks"]] 
        },
        { 
          name: "Meetups", 
          icon: "bi bi-calendar-event", // Calendar icon for Meetups
          target: "meetups-nav", 
          menu: [["My Meetups", "/meetups"]] 
        },
      ];
      

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                {navItems.map((item, index) => (
                    <NavItem 
                        key={index}
                        name={item.name} 
                        className={item.icon} 
                        target={item.target} 
                        menu={item.menu} 
                        icon={item.icon}
                     
                    />
                ))}
                
                <li className="nav-heading">Pages</li>
            </ul>
        </aside>
    );
}
