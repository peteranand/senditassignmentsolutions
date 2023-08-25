import {Card} from '@components/Card';
import {List} from '@components/List';
import {AssignmentProps} from './AssignmentDetails.interface';

export function AssignmentDetails(props: AssignmentProps) {
  const DETAILS = [
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'phoneNumber', label: 'Phone Number'},
    {key: 'academicLevel', label: 'Academic Level'},
    {key: 'subject', label: 'Subject'},
    {key: 'description', label: 'Description'},
  ];
  const NO_CONTENT_TEXT = "NO CONTENT"

  return (
    <Card>
      <List>
        {DETAILS.map(({key, label}) => {
          let content = props[key];
          if(content===undefined) content = 'NA'
          return (
            <List.Item>
              <span>{label}</span>
              <span>{}</span>
            </List.Item>
          );
        })}
      </List>
    </Card>
  );
}
