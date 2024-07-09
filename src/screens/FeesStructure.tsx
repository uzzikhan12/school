import React, { useState } from 'react';
import BADrawer from '../components/BADrawer';

const FeeStructure = () => {
  const [fees, setFees] = useState([
    { id: 1, type: 'Tuition Fees', amount: 5000 },
    { id: 2, type: 'Registration Fees', amount: 200 },
    { id: 3, type: 'Examination Fees', amount: 300 },
    { id: 4, type: 'Library Fees', amount: 100 },
    { id: 5, type: 'Laboratory Fees', amount: 250 },
    { id: 6, type: 'Transportation Fees', amount: 150 },
    { id: 7, type: 'Hostel Fees', amount: 1000 },
    { id: 8, type: 'Mess Fees', amount: 300 },
    { id: 9, type: 'Development Fees', amount: 400 },
    { id: 10, type: 'Activity Fees', amount: 150 },
    { id: 11, type: 'Health and Insurance Fees', amount: 100 },
    { id: 12, type: 'Technology Fees', amount: 200 },
    { id: 13, type: 'Miscellaneous Fees', amount: 50 },
  ]);

  return (
    <div>
        <BADrawer />
      <h2 className='text-center'>Fee Structure</h2>
      <table className='table table-striped w-75 m-auto border'>
        <thead>
          <tr>
            <th className='bg-dark text-white'>Fee Type</th>
            <th className='bg-dark text-white'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {fees.map(fee => (
            <tr key={fee.id}>
              <td>{fee.type}</td>
              <td>{fee.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructure;