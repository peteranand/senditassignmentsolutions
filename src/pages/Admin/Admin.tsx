import React from 'react';
import {getAllAssignments} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';
import {AssignmentDescription} from './AssignmentDescription';
// import {AssignmentDetails} from './AssignmentDetails';

import './Admin.scss';

export function Admin() {
  const [data, setData] = React.useState<Array<AssignmentData>>([]);

  const getUsersData = async () => {
    const assignments = await getAllAssignments();
    console.log({assignments});
    if (assignments !== undefined) setData(assignments);
  };
  React.useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className='admin'>
      <h2 className='admin__title'>Details</h2>
      {data.map((assignmentData) => (
        <AssignmentDescription
          key={assignmentData.phoneNumber}
          {...assignmentData}
        />
      ))}
    </div>
  );
}
