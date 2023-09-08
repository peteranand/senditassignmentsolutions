import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import {UploadFilesProps} from './UploadFiles.interface';
import {message} from '@components/Message';

import {LITERALS} from './UploadFile.constants';

import type {UploadFile, UploadProps} from 'antd/es/upload/interface';

export function UploadFiles(props: UploadFilesProps) {
  const uploadProps: UploadProps = {
    onRemove: (file: UploadFile) => {
      props.onRemove(file);
    },
    beforeUpload: (file: UploadFile) => {
      if (!file.size) return false;

      if (props.maxFileCount !== undefined) {
        if (props.fileList.length - 1 > props.maxFileCount) {
          message.error(LITERALS.FILE_COUNT_EXCEEDED);
          return false;
        }
      }

      if (props.maxFileSize !== undefined) {
        const isLtLimit = file?.size / 1024 / 1024 < props.maxFileSize;
        if (!isLtLimit) {
          message.error(
            `${LITERALS.FILE_SIZE_EXCEEDED.HEAD} ${props.maxFileSize} ${LITERALS.FILE_SIZE_EXCEEDED.TRAIL}`
          );
          return false;
        }
      }

      props.onUpload(file);
      return false;
    },
    fileList: props.fileList,
  };

  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>{LITERALS.UPLOAD_BUTTON}</Button>
    </Upload>
  );
}
