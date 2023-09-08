import {CONTENT, HEADING} from './Description.constants';

import './Description.scss';

export function Description(): JSX.Element {
  return (
    <div className='home-description'>
      <span dangerouslySetInnerHTML={{__html: HEADING}} />
      <span dangerouslySetInnerHTML={{__html: CONTENT}} />
    </div>
  );
}
