import {Desctription} from './Description';
import {Header} from '../../components/Header';
import {AssignmentForm} from './AssignmentForm/AssignmentForm';

import './Home.scss';

export function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <main className='home-content'>
        <Desctription />
        <AssignmentForm />
      </main>
    </div>
  );
}
