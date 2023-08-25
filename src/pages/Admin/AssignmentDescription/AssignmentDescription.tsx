import {Card} from '@components/Card';
import {Descriptions} from '@components/Descriptions';
import {List} from '@components/List';
import {AssignmentProps} from './AssignmentDescription.interface';

export function AssignmentDescription(props: AssignmentProps) {
  const DETAILS = [
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'academicLevel', label: 'Academic Level'},
    {key: 'subject', label: 'Subject'},
    {key: 'description', label: 'Description'},
  ];
  const NO_CONTENT_TEXT = 'NO CONTENT';

  return (
    <Descriptions title='User Info'>
      {DETAILS.map(({key, label}) => {
        let content = props[key];
        // if(content===undefined) content = 'NA'
        return (
          <Descriptions.Item label={label}>
            <span>{content}</span>
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
}
