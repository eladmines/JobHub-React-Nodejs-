import {Logo} from '../Logo'
import {NavBar} from './NavBar'
export function TopBar(){
    return (  
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <NavBar />
      </header>
      );
}
