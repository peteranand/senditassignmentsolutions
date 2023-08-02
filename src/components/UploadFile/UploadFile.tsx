import React from 'react';

import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import type {UploadFile, UploadProps} from 'antd/es/upload/interface';
import {UploadFilesProps} from './UploadFiles.interface';

export function UploadFiles(props: UploadFilesProps) {
  const uploadProps: UploadProps = {
    onRemove: (file: UploadFile) => {
      props.onRemove(file);
    },
    beforeUpload: (file: UploadFile) => {
      props.onUpload(file);
      return false;
    },
    fileList: props.fileList,
  };

  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
}
