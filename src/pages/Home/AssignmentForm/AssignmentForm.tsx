import {Rule} from 'antd/es/form';
import React from 'react';

import {Button} from '@components/Button/Button';
import {Form, FormItem} from '@components/Form';
import {Input} from '@components/Input';
import {SelectBox} from '@components/SelectBox';
import {TextArea} from '@components/TextArea';
import {UploadFiles} from '@components/UploadFile/UploadFile';
import {UploadFileType} from '@components/UploadFile/UploadFiles.interface';
import {addAssignment} from '@services/assignment';
import {SELECT_INPUT_OPTIONS as OPTIONS} from './AssignmentForm.constants';
import {Modal} from '@components/Modal';

import './AssignmentForm.scss';

export function AssignmentForm(): JSX.Element {
  const [uploadFiles, setUploadFiles] = React.useState<UploadFileType[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();

  const commonRules: Rule[] = [{required: true}];

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const {upload, ...documentData} = values;
      if (documentData?.description === undefined)
        documentData.description = '';

      const response = await addAssignment(documentData, uploadFiles);

      console.log({documentData});
      console.log({response});
      onOrderSuccess();
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const onOrderSuccess = () => {
    Modal.success({
      title: 'Order Placed!',
      content: 'Ipsum lorem anands boredom',
    });
    form.resetFields();
    setUploadFiles([]);
  };

  const onUploadFile = (newFile: UploadFileType) => {
    setUploadFiles((prevFiles) => [...prevFiles, newFile]);
  };
  const onRemoveFile = (removedFile: UploadFileType) => {
    setUploadFiles((prevFiles) => {
      const index = prevFiles.indexOf(removedFile);
      const newFileList = prevFiles.slice();
      newFileList.splice(index, 1);
      return newFileList;
    });
  };

  return (
    <Form
      className='form-container'
      layout='vertical'
      onFinish={onFinish}
      form={form}>
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
          <SelectBox
            options={OPTIONS.ACADEMIC_LEVEL}
            placeholder='Select Level'
          />
        </FormItem>
        <FormItem label='Subject' name='subject' rules={[...commonRules]}>
          <SelectBox options={OPTIONS.SUBJECT} placeholder='Select Subject' />
        </FormItem>
      </div>
      <FormItem label='Description' name='description' rules={[]}>
        <TextArea placeholder='Autosize based on content lines' />
      </FormItem>
      <FormItem label='Upload' name='upload'>
        <UploadFiles
          fileList={uploadFiles}
          onUpload={onUploadFile}
          onRemove={onRemoveFile}
        />
      </FormItem>
      <FormItem>
        <Button loading={loading} className='submit-button' htmlType='submit'>
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
