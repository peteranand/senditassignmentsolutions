import {ROUTES} from '../../constants/routes.constants';
import {Button} from '../Button';
import {Logo} from './Logo';
import {useNavigate} from 'react-router-dom';

import './Header.scss';

export function Header(): JSX.Element {
  const navigation = useNavigate();
  const NAV_ITEMS = [
    {label: 'Service', href: ''},
    {label: 'Jobs', href: ''},
    {label: 'Contact Us', href: ''},
    {label: 'My Account', href: ''},
  ];
  const LOGIN_LABEL = 'Login';
  const onClickLogin = () => {
    navigation(ROUTES.LOGIN);
  };

  return (
    <header className='header'>
      <Logo />
      <div className='header-nav-container'>
        <ul>
          {NAV_ITEMS.map(({label, href}) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <Button onClick={onClickLogin}>{LOGIN_LABEL}</Button>
      </div>
    </header>
  );
}
