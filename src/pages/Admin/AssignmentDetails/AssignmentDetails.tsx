import React from 'react';
import {List} from '@components/List';
import {AssignmentProps, STATUS_TYPES} from './AssignmentDetails.interface';
import Paragraph from 'antd/es/typography/Paragraph';
import {Timestamp} from 'firebase/firestore';
import {
  DATE_FIELDS,
  LITERALS as L,
  TEXT_DETAILS,
} from './AssignmentDetails.constants';
import {Steps} from 'antd';
import {StepDependentContent} from './StepDependentContent';

import cn from './AssignmentDetails.module.scss';

export const STATUS = [
  {label: 'Created', value: 'created'},
  {label: 'Accepted', value: 'accepted'},
  {label: 'Rejected', value: 'rejected'},
  {label: 'Due', value: 'due'},
  {label: 'Overdue', value: 'overdue'},
  {label: 'Review', value: 'review'},
  {label: 'Out for delivery', value: 'delivery'},
  {label: 'Done', value: 'done'},
];

const STEPS: {title: string; value: STATUS_TYPES}[] = [
  {title: 'Created', value: 'created'},
  {title: 'Processing', value: 'processing'},
  {title: 'Assign', value: 'assign'},
  {title: 'Task In Progress', value: 'taskInProgress'},
  {title: 'Assign Reviewer', value: 'assignReviewer'},
  {title: 'Review In Progress', value: 'reviewInProgress'},
  {title: 'Done', value: 'done'},
];

export function AssignmentDetails(props: AssignmentProps) {
  const [activeStep, setActiveStep] = React.useState(1);

  const activeStateValue: STATUS_TYPES = STEPS[activeStep].value;
  const moveToNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };
  const onFail = () => {};

  return (
    <>
      <Steps
        direction='vertical'
        current={activeStep}
        items={STEPS}
        responsive
      />
      <StepDependentContent
        active={activeStateValue}
        onStepSuccess={moveToNextStep}
        onStepFail={onFail}
      />
      <List className={cn.list}>
        {TEXT_DETAILS.map(({key, label}) => (
          <TextItem
            label={label}
            content={props[key as keyof AssignmentProps] as string}
          />
        ))}
        {DATE_FIELDS.map(({key, label}) => (
          <DateItem
            label={label}
            content={props[key as keyof AssignmentProps] as Timestamp}
          />
        ))}
      </List>
    </>
  );
}

interface TextItemProps {
  label: string;
  content: string;
}
function TextItem(props: TextItemProps): JSX.Element {
  let content = props.content;
  const emptyContentClassName = !content ? cn.emptyContent : '';
  if (!content) content = L.NO_CONTENT;
  return (
    <List.Item className={cn.list__item}>
      <span className={cn.list__item_label}>{props.label}</span>
      <Paragraph
        className={`${cn.list__item_content} ${emptyContentClassName}`}
        ellipsis={{rows: 2, expandable: true, symbol: L.SHOW_MORE}}>
        {content}
      </Paragraph>
    </List.Item>
  );
}

interface DateItemProps {
  label: string;
  content: Timestamp;
}
function DateItem(props: DateItemProps) {
  const content = props.content.toDate().toLocaleDateString();
  return (
    <List.Item className={cn.list__item}>
      <span className={cn.list__item_label}>{props.label}</span>
      <Paragraph className={cn.list__item_content}>{content}</Paragraph>
    </List.Item>
  );
}
