import React from 'react';
import { withCertified } from '../../hoc/certified';

interface HelloProps {
  value: string;
  num: string;
}

const HighOrderConsumer = ({ value, num }: HelloProps) => {
  return (
    <div>
      <div className="">{value}</div>
      <div className="">{num}</div>
    </div>
  );
};

export default withCertified(HighOrderConsumer);
