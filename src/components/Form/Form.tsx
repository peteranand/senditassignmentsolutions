import {Form as AntForm} from 'antd';
import React from 'react';
import {FormItemProps, FormProps} from './Form.interface';

export function Form({children, ...props}: FormProps) {
  return <AntForm {...props}>{children as React.ReactNode}</AntForm>;
}

export function FormItem(props: FormItemProps) {
  return <AntForm.Item {...props} />;
}
