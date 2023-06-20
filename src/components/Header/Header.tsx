import cn from './Header.style.module.scss';

export function Header(): JSX.Element {
  return (
    <div className={cn.header}>
      <span className={cn.logo}>Logo</span>
      <a>Services</a>
      <a>Jobs</a>
      <a>Contact Us</a>
      <a>My Account</a>
    </div>
  );
}
