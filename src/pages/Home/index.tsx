import { Desctription } from '../../components/Description';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm/InputForm';
import './style.scss';

export function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <Desctription />
        <InputForm />
      </div>
    </>
  );
}
