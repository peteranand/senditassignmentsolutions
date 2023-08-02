import {Descriptions as MUIDescriptions} from 'antd';
import {
  DescriptionsItemProps,
  DescriptionsProps,
} from './Descriptions.interface';

export function Descriptions(props: DescriptionsProps) {
  return <MUIDescriptions {...props} />;
}

Descriptions.Item = function (props: DescriptionsItemProps) {
  return <MUIDescriptions.Item {...props} />;
};
