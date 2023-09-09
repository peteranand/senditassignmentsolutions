import React from 'react';

import {Button} from '@components/Button/Button';
import {Form, FormItem, Rule} from '@components/Form';
import {Input} from '@components/Input';
import {SelectBox} from '@components/SelectBox';
import {TextArea} from '@components/TextArea';
import {UploadFiles} from '@components/UploadFile/UploadFile';
import {UploadFileType} from '@components/UploadFile/UploadFiles.interface';
import {Modal} from '@components/Modal';
import {DatePicker} from '@components/DatePicker';
import {InputNumber} from '@components/InputNumber';
import {addAssignment} from '@services/assignment';
import {Dayjs} from 'dayjs';

import {
  INPUT_LITERALS as IL,
  LITERALS as L,
  SELECT_INPUT_OPTIONS as OPTIONS,
  UPLOAD,
} from './AssignmentForm.constants';

import './AssignmentForm.scss';

export function AssignmentForm(): JSX.Element {
  const [uploadFiles, setUploadFiles] = React.useState<UploadFileType[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();

  const commonRules: Rule[] = [{required: true}];

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const {upload, countType, ...documentData} = values;
      if (documentData?.description === undefined)
        documentData.description = '';

      documentData.count = `${documentData.count} ${documentData.countType}`;

      console.log({documentData, type: new Date(documentData.deadline)});

      // const response = await addAssignment(documentData, uploadFiles);
      // console.log({response});

      // onOrderSuccess();
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const onOrderSuccess = () => {
    Modal.success({
      title: L.ORDER_SUCCESS.TITLE,
      content: L.ORDER_SUCCESS.CONTENT,
    });
    form.resetFields();
    setLoading(false);
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

  const disableDatesBeforeToday = (date: Dayjs) => {
    let now = new Date();
    if (now < date.toDate()) return false;
    return true;
  };

  return (
    <Form className='form' layout='vertical' onFinish={onFinish} form={form}>
      <div className='row-block'>
        <FormItem
          label={IL.NAME.LABEL}
          name={IL.NAME.NAME}
          rules={[...commonRules]}>
          <Input placeholder={IL.NAME.PLACEHOLDER} />
        </FormItem>
        <FormItem
          label={IL.PHONE.LABEL}
          name={IL.PHONE.NAME}
          rules={[...commonRules]}>
          <Input type='number' placeholder={IL.PHONE.PLACEHOLDER} />
        </FormItem>
      </div>
      <FormItem
        label={IL.EMAIL.LABEL}
        name={IL.EMAIL.NAME}
        rules={[
          ...commonRules,
          {type: 'email', message: IL.EMAIL.VALIDATION_MSG},
        ]}>
        <Input placeholder={IL.EMAIL.PLACEHOLDER} />
      </FormItem>
      <div className='row-block'>
        <FormItem
          label={IL.ACADEMIC_LEVEL.LABEL}
          name={IL.ACADEMIC_LEVEL.NAME}
          rules={[...commonRules]}>
          <SelectBox
            options={OPTIONS.ACADEMIC_LEVEL}
            placeholder={IL.ACADEMIC_LEVEL.PLACEHOLDER}
          />
        </FormItem>
        <FormItem
          label={IL.SUBJECT.LABEL}
          name={IL.SUBJECT.NAME}
          rules={[...commonRules]}>
          <SelectBox
            options={OPTIONS.SUBJECT}
            placeholder={IL.SUBJECT.PLACEHOLDER}
          />
        </FormItem>
      </div>
      <div className='row-block'>
        <FormItem
          className='form__count'
          label={IL.COUNT.LABEL}
          name={IL.COUNT.NAME}
          rules={[...commonRules]}>
          <InputNumber
            placeholder={IL.COUNT.PLACEHOLDER}
            addonAfter={
              <FormItem
                name={IL.COUNT_TYPE.NAME}
                initialValue={OPTIONS.COUNT_TYPE[0].value}>
                <SelectBox
                  popupMatchSelectWidth={80}
                  className={'count-select'}
                  options={OPTIONS.COUNT_TYPE}
                  placeholder={IL.COUNT_TYPE.PLACEHOLDER}
                  defaultOpen
                />
              </FormItem>
            }
          />
        </FormItem>
        <FormItem
          label={IL.DEADLINE.LABEL}
          name={IL.DEADLINE.NAME}
          rules={[...commonRules]}>
          <DatePicker
            picker='date'
            disabledDate={disableDatesBeforeToday}
            placeholder={IL.DEADLINE.PLACEHOLDER}
          />
        </FormItem>
      </div>
      <FormItem label={IL.DESC.LABEL} name={IL.DESC.NAME} rules={[]}>
        <TextArea className={'text-area'} placeholder={IL.DESC.PLACEHOLDER} />
      </FormItem>
      <FormItem label={IL.UPLOAD.LABEL} name={IL.UPLOAD.NAME}>
        <UploadFiles
          fileList={uploadFiles}
          onUpload={onUploadFile}
          onRemove={onRemoveFile}
          maxFileSize={UPLOAD.MAX_SIZE}
          maxFileCount={UPLOAD.MAX_COUNT}
        />
      </FormItem>
      <FormItem>
        <Button loading={loading} className='submit-button' htmlType='submit'>
          {L.SUBMIT_BUTTON}
        </Button>
      </FormItem>
    </Form>
  );
}
