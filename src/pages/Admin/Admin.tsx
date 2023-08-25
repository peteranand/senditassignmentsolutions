import React from 'react';
import {getAllAssignments} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';
import {AssignmentDescription} from './AssignmentDescription';
// import {AssignmentDetails} from './AssignmentDetails';

export function Admin() {
  const [data, setData] = React.useState<Array<AssignmentData>>([]);

  const getUsersData = async () => {
    const assignments = await getAllAssignments();
    if (assignments !== undefined) setData(assignments);
  };
  React.useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className='admin-container'>
      <h2>Details</h2>
      {data.map((assignmentData) => (
        <AssignmentDescription
          key={assignmentData.phoneNumber}
          {...assignmentData}
        />
      ))}
    </div>
  );
}
