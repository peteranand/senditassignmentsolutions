import {List} from '@components/List';
import {AssignmentProps, STATUS_TYPES} from './AssignmentDetails.interface';
import Paragraph from 'antd/es/typography/Paragraph';
import {Timestamp} from 'firebase/firestore';
import {
  DATE_FIELDS,
  LITERALS as L,
  STEPS,
  TEXT_DETAILS,
} from './AssignmentDetails.constants';
import {Steps, Tabs} from 'antd';
import {StepDependentContent} from './StepDependentContent';
import {CopyButton} from './CopyButton';
import {ROUTES} from '@constants/routes.constants';

import cn from './AssignmentDetails.module.scss';

export function AssignmentDetails(props: AssignmentProps) {
  const getActiveStepIndex = () => {
    if (!props.actions) return 1;
    const lastAction = props.actions[props.actions.length - 1];
    return STEPS.findIndex(({value}) => value === lastAction.state) + 1;
  };
  const activeIndex = getActiveStepIndex();
  const activeStateValue: STATUS_TYPES = STEPS[activeIndex]?.value;
  const copyUrl = `${window.location.origin}${ROUTES.SHARE.split(':')[0]}${
    props.id
  }`;

  const getStepsWithDesc = () => {
    return STEPS.map((data) => {
      if (data.value === 'created') {
        const date = new Date(props.created_at.toDate()).toDateString();
        const description = `Closed date: ${date}`;
        return {...data, description};
      }

      const actionItem = props.actions?.find(({state}) => data.value === state);
      if (actionItem) {
        const date = new Date(
          (actionItem.timestamp as unknown as Timestamp).toDate()
        ).toDateString();
        const description = `Closed date: ${date}`;
        return {...data, description};
      }
      return data;
    });
  };

  const statusChildren = (
    <>
      <Steps
        direction='vertical'
        current={activeIndex}
        items={getStepsWithDesc()}
        responsive
      />
      <StepDependentContent
        id={props.id as string}
        active={activeStateValue}
        writers={props.writers}
      />
    </>
  );
  const detailsChildren = (
    <>
      <List className={cn.list}>
        {DATE_FIELDS.map(({key, label}) => (
          <DateItem
            label={label}
            content={props[key as keyof AssignmentProps] as Timestamp}
          />
        ))}
        {TEXT_DETAILS.map(({key, label}) => (
          <TextItem
            label={label}
            content={props[key as keyof AssignmentProps] as string}
          />
        ))}
        <TextItem
          label={'Assigned To'}
          content={
            props.writers.find(({value}) => value === props?.assignedTo)?.label
          }
        />
        <TextItem
          label={'Review Assigned to'}
          content={
            props.writers.find(({value}) => value === props?.reviewer)?.label
          }
        />
      </List>
      <CopyButton copyUrl={copyUrl} />
    </>
  );

  const items = [
    {label: 'Status', key: '1', children: statusChildren},
    {label: 'Details', key: '2', children: detailsChildren},
  ];

  return <Tabs defaultActiveKey='1' items={items} />;
}

interface TextItemProps {
  label: string;
  content?: string;
}
function TextItem(props: TextItemProps): JSX.Element {
  let content = props.content;
  const emptyContentClassName = !content ? cn.emptyContent : '';
  if (content === undefined) return <></>;
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
