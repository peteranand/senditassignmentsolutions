import {Spin} from 'antd';
import {ContentLoaderProps as Props} from './ContentLoader.interface';

import cn from './ContentLoader.module.scss';

export function ContentLoader(props: Props): JSX.Element {
  if (props.loading) return <Spin className={cn.spinner} size='large' />;
  return <>{props.children}</>;
}
