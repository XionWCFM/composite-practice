import HighOrderConsumer from '@/src/components/consum/highorder-consumer';
import WrapperConsumer from '@/src/components/consum/wrapper-consumer';
import { CertificationWrapper } from '@/src/wrapper/certification';
import { get } from '@toss/utils';
import React from 'react';
export default function Home() {
  const deepObj = {
    hi: {
      hello: {
        dgs: 123,
      },
    },
  };
  const getter = get<number>(deepObj, 'hi.hello.dgs');
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div className="">고차컴포넌트형식</div>
      <HighOrderConsumer value="dsa" num="sda" />
      <div className="">래퍼컴포넌트형식</div>
      <CertificationWrapper>
        <WrapperConsumer />
      </CertificationWrapper>
      <div className="">{getter}</div>
    </div>
  );
}
