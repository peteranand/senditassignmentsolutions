import {UploadFile} from 'antd';

export type UploadFileType = UploadFile<File>;
export interface UploadFilesProps {
  /**
   * Callback function triggered on remove upload from file list
   */
  onRemove: (arg: UploadFileType) => void;
  /**
   * Callback function triggered when new file is added to upload
   */
  onUpload: (arg: UploadFileType) => void;
  /**
   * Array of upload files
   */
  fileList: Array<UploadFileType>;
  /**
   * maximum allowed file size
   */
  maxFileSize?: number;
  /**
   * maximum allowed number of files
   */
  maxFileCount?: number;
}
