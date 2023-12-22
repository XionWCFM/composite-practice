import React from 'react';
import { useDatePicker } from '@xionhub/react-hook';
import DatePicker from 'react-datepicker';
export default function Home() {
  const datepicker = useDatePicker(new Date());
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {datepicker.calendar.map((row) => (
        <div className=" flex gap-x-2" key={Math.random()}>
          {row.map((day) => (
            <button key={Math.random()}>{day.getDate() + 1}일</button>
          ))}
        </div>
      ))}
    </div>
  );
}
