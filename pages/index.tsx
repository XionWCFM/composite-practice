import Hello from '@/src/components/consum/Hello';
import React from 'react';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <Hello value="dsa" num="sda" />
    </div>
  );
}
