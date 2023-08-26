import {Descriptions} from '@components/Descriptions';
import {AssignmentProps} from './AssignmentDescription.interface';
import {AssignmentData} from '@Types/asssignments';

import cn from './AssignmentDescription.module.scss';

export function AssignmentDescription(props: AssignmentProps) {
  const DETAILS: {
    ['key']: keyof AssignmentData;
    ['label']: string;
  }[] = [
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'academicLevel', label: 'Academic Level'},
    {key: 'subject', label: 'Subject'},
    {key: 'description', label: 'Description'},
    {key: 'documents', label: 'Documents'},
  ];

  const title = `${props.name}'s Assignment`;
  return (
    <Descriptions title={title} className={cn.desc}>
      {DETAILS.map(({key, label}) => {
        if (key === 'documents' && props[key].length !== 0) {
          const documents = props[key] as string[];
          return (
            <Descriptions.Item className={cn.desc__docList} label={label}>
              {documents.map((docHref, index) => {
                const text = `Document-${index + 1}`;
                return <a href={docHref}>{text}</a>;
              })}
            </Descriptions.Item>
          );
        }
        let content = props[key] as string;
        return (
          <Descriptions.Item className={cn.desc__item} label={label}>
            <span className={cn.desc__item_content} title={content}>
              {content}
            </span>
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
}
