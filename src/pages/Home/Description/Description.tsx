import {CONTENT, HEADING} from './Description.constants';

import './Description.scss';

export function Description(): JSX.Element {
  return (
    <div className='home-tagline'>
      <span
        className='home-tagline__title'
        dangerouslySetInnerHTML={{__html: HEADING}}
      />
      <span
        className='home-tagline__desc'
        dangerouslySetInnerHTML={{__html: CONTENT}}
      />
    </div>
  );
}
