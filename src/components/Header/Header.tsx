import {Button} from '../Button';
import './Header.scss';
import {Logo} from './Logo';

export function Header(): JSX.Element {
  // const NAV_ITEMS = [
  //   {label: 'Service'},
  //   {label: 'Jobs'},
  //   {label: 'Contact Us'},
  //   {label: 'Login'},
  // ];

  return (
    <header className='header'>
      <Logo />
      <div className='header-nav-container'>
        <a>Services</a>
        <a>Jobs</a>
        <a>Contact Us</a>
        <a>My Account</a>
        <Button>Login</Button>
      </div>
    </header>
  );
}
