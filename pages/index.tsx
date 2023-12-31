import HighOrderConsumer from '@/src/components/consum/highorder-consumer';
import WrapperConsumer from '@/src/components/consum/wrapper-consumer';
import { CertificationWrapper } from '@/src/wrapper/certification';
import React from 'react';
export default function Home() {
  React.useEffect(() => {
    (async () => {
      const a = await Promise.allSettled([
        new Promise((res) => {
          res('hi');
        }),
        new Promise((res, rej) => {
          rej('bye');
        }),
      ]);
      console.log(a);
    })();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div className="">고차컴포넌트형식</div>
      <HighOrderConsumer value="dsa" num="sda" />
      <div className="">래퍼컴포넌트형식</div>
      <CertificationWrapper>
        <WrapperConsumer />
      </CertificationWrapper>
    </div>
  );
}
