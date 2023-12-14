import React from 'react';
import { useDatePicker } from '@xionhub/react-hook';

export default function Home() {
  const datepicker = useDatePicker(new Date());
  console.log(datepicker);
  return <div className=""></div>;
}
