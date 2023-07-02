import './Description.scss';

export function Description(): JSX.Element {
  const HEADING = 'A Special credit card made for Developers';
  const CONTENT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. ';

  return (
    <div className='home-description'>
      <span>{HEADING}</span>
      <span>{CONTENT}</span>
    </div>
  );
}
