import {useNavigate} from 'react-router-dom';
import {message} from '@components/Message';
import {MobileDrawer} from './MobileDrawer/MobileDrawer';

import {ROUTES} from '@constants/routes.constants';
import {NAV_ITEMS_DATA} from './Header.constants';
import {Logo} from './Logo';

import './Header.scss';

export function Header(): JSX.Element {
  const onClickNav = (href: string) => (e: React.MouseEvent) => {
    if (href === '') {
      e.preventDefault();
      e.stopPropagation();
      message.destroy();
      message.info('Comming soon!');
    }
  };

  return (
    <header className='header'>
      <a href={ROUTES.HOME} className='logo'>
        <Logo />
      </a>
      <div className='header-nav-container'>
        <ul>
          {NAV_ITEMS_DATA.map(({label, href}) => (
            <li key={label} onClick={onClickNav(href)}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <MobileDrawer />
    </header>
  );
}
