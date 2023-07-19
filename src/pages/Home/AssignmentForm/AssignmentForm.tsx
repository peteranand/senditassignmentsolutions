import {Rule} from 'antd/es/form';

import {Button} from '../../../components/Button/Button';
import {Form, FormItem} from '../../../components/Form';
import {Input} from '../../../components/Input';
import {InputNumber} from '../../../components/InputNumber';
import {SelectBox} from '../../../components/SelectBox';
import {TextArea} from '../../../components/TextArea';
import {UploadFiles} from '../../../components/UploadFile/UploadFile';
import {addAssignment} from '../../../services/assignment';

import './AssignmentForm.scss';

export function AssignmentForm(): JSX.Element {
  const OPTIONS = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
  ];

  const commonRules: Rule[] = [{required: true}];

  const onFinish = async (values: any) => {
    const {upload, ...documentData} = values;
    if (documentData?.description === undefined) documentData.description = '';
    const result = await addAssignment(documentData);
    console.log({values, result});
  };

  return (
    <Form className='form-container' layout='vertical' onFinish={onFinish}>
      <FormItem label='Name' name='name' rules={[...commonRules]}>
        <Input placeholder='example' />
      </FormItem>
      <FormItem
        label='Email'
        name='email'
        rules={[
          ...commonRules,
          {type: 'email', message: 'Input is not a valid E-mail'},
        ]}>
        <Input placeholder='you@company.com' />
      </FormItem>
      <FormItem
        label='Phone Number'
        name='phoneNumber'
        rules={[...commonRules]}>
        <Input placeholder='+91 00000-00000' maxLength={10} />
      </FormItem>
      <div className='select-block'>
        <FormItem
          label='Academic Level'
          name='academicLevel'
          rules={[...commonRules]}>
          <SelectBox options={OPTIONS} placeholder='Select Level' />
        </FormItem>
        <FormItem label='Subject' name='subject' rules={[...commonRules]}>
          <SelectBox options={OPTIONS} placeholder='Select Subject' />
        </FormItem>
      </div>
      <FormItem label='Description' name='description' rules={[]}>
        <TextArea placeholder='Autosize based on content lines' />
      </FormItem>
      <FormItem label='Upload' name='upload' help='Upload the assignment'>
        <UploadFiles />
      </FormItem>
      <FormItem>
        <Button className='submit-button' htmlType='submit'>
          Order Now
        </Button>
      </FormItem>
    </Form>
  );
}

/**
 * Doubts:
 * Academic level should be a number, text or select box??
 * does no of pages need a threshold
 */
