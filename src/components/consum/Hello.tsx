import React from 'react';
import { withConsole } from '../hoc/example';

interface HelloProps {
  value: string;
  num: string;
}

const Hello = ({ value, num }: HelloProps) => {
  return (
    <div>
      <div className="">{value}</div>
      <div className="">{num}</div>
    </div>
  );
};

export default withConsole(Hello);
