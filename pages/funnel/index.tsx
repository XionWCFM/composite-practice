import { useFunnel } from '@/composite-module/funnel/useFunnel';
import React from 'react';

interface indexProps {}

const Index = ({}: indexProps) => {
  const route = ['iam', 'zzang', 'legend'] as const;
  const [Funnel, nextStep] = useFunnel(route);
  return (
    <div>
      <Funnel>
        <Funnel.Step name="iam">
          <div className="" onClick={nextStep('legend')}>
            wow
          </div>
        </Funnel.Step>
        <Funnel.Step name="zzang">
          <div className="" onClick={nextStep('iam')}>
            hi
          </div>
        </Funnel.Step>
        <Funnel.Step name="legend">
          <div className="" onClick={nextStep('zzang')}>
            zzang im nida
          </div>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default Index;
