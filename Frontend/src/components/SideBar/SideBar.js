import { NavItem } from './NavItem';

export function SideBar() {
    const navItems = [
        { name: "Jobs", icon: "bi bi-menu-button-wide", target: "jobs-nav", menu: ["All Jobs", "Saved Jobs"] },
        { name: "Applications", icon: "bi bi-journal-text", target: "applications-nav", menu: ["My Applications", "Active Applications"] },
        { name: "Connections", icon: "bi bi-journal-text", target: "connections-nav", menu: ["My Connections"] },
        { name: "Tasks", icon: "bi bi-menu-button-wide", target: "tasks-nav", menu: ["My Tasks"] },
        { name: "Meetups", icon: "bi bi-journal-text", target: "meetups-nav", menu: ["My Meetups"] },
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
                    />
                ))}

                {/* Pages heading */}
                <li className="nav-heading">Pages</li>
            </ul>
        </aside>
    );
}
