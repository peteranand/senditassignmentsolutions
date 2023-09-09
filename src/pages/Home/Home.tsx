import {Desctription} from './Description';
import {AssignmentForm} from './AssignmentForm';

import './Home.scss';

export function Home(): JSX.Element {
  return (
    <main className='home-content'>
      <Desctription />
      <AssignmentForm />
    </main>
  );
}
