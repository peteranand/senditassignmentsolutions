import {CONTENT, HEADING} from './Description.constants';

import './Description.scss';

export function Description(): JSX.Element {
  return (
    <div className='home-description'>
      <span>{HEADING}</span>
      <span>{CONTENT}</span>
    </div>
  );
}
