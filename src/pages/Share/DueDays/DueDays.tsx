import {getDateDiff} from '@utils/date';
import {DueDaysProps as Props} from './DueDays.interface';

import './DueDays.scss';

export function DueDays(props: Props) {
  const daysLeft = props
    ? getDateDiff(
        new Date(new Date().toLocaleDateString()),
        new Date(props?.deadline)
      )
    : 0;

  const getContent = () => {
    if (daysLeft > 0)
      return (
        <span
          className='due'
          dangerouslySetInnerHTML={{
            __html: `Task Due in: <b>${daysLeft}</b> Day(s)`,
          }}
        />
      );
    if (daysLeft === 0)
      return <span className='overdue'>{`Task is Overdue`}</span>;
    if (daysLeft < 0)
      return (
        <span
          className='overdue'
          dangerouslySetInnerHTML={{
            __html: `Task Overdue by <b>${daysLeft * -1} Day(s)</b>`,
          }}
        />
      );
  };

  return <div className='dueDays'>{getContent()}</div>;
}
