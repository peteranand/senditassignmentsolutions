import React from 'react';

import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import type {UploadFile, UploadProps} from 'antd/es/upload/interface';

export function UploadFiles() {
  const [fileList, setFileList] = React.useState<UploadFileType[]>([]);

  const props: UploadProps = {
    onRemove: (file: UploadFile) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file: UploadFile) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
}

export type UploadFileType = UploadFile<File>;
