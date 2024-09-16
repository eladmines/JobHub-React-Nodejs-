import {Logo} from '../Logo'
import {SearchBar} from '../inputs/SearchBar'
import {NavBar} from './NavBar'
export function TopBar(){
    return (  
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <NavBar />
    
      </header>
      );
}
