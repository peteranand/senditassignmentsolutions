import {useNavigate} from 'react-router-dom';
import {Button} from '../../components/Button';
import {Form, FormItem} from '../../components/Form';
import {Input} from '../../components/Input';
import {ROUTES} from '../../constants/routes.constants';
import {TEMPAuthentication} from '../../utils/auth';

import './Login.scss';

export function Login() {
  const navigate = useNavigate();

  const onClickLogin = (values: any) => {
    const {success} = TEMPAuthentication(values);
    if (success) navigate(ROUTES.ADMIN);
    else window.alert('Comming soon');
  };

  return (
    <div className='login-wrapper'>
      <Form className='form' onFinish={onClickLogin}>
        <FormItem name='username' label='User Name' rules={[{required: true}]}>
          <Input />
        </FormItem>
        <FormItem name='password' label='Password' rules={[{required: true}]}>
          <Input type='password' />
        </FormItem>
        <FormItem>
          <Button htmlType='submit'>Login</Button>
        </FormItem>
        <a href={ROUTES.HOME}>Back to Home</a>
      </Form>
    </div>
  );
}
