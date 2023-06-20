import cn from './style.module.scss';

export function Header(): JSX.Element {
  return (
    <div className={cn.header}>
      <span className={cn.logo}>Logo</span>
      <a>Place your order</a>
      <a>Join us today</a>
      <a>My Account </a>
    </div>
  );
}
