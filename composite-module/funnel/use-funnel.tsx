import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { Funnel, Step } from './Funnel';
import { NonEmptyArray, RouteFunnelProps, StepProps } from './Funnel.type';
export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  option?: {
    initialStep: Steps[number];
  },
) => {
  const [steps, setSteps] = React.useState<Steps>(array);
  const router = useRouter();
  const step = router.query.step as unknown as string;
  const nextStep = (nextQuery: Steps[number]) => {
    return () =>
      router.push(`${router.pathname}?step=${nextQuery}`, undefined, {
        shallow: true,
      });
  };
  useEffect(() => {
    if (option?.hasOwnProperty('initialStep')) {
      router.replace(`${router.pathname}?step=${option.initialStep}`);
    } else {
      router.replace(`${router.pathname}?step=${steps[0]}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FunnelComponent = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return Object.assign(
      (props: RouteFunnelProps<Steps>) => {
        return <Funnel<Steps> step={step} steps={steps} {...props} />;
      },
      {
        Step: (props: StepProps<Steps>) => {
          return <Step {...props} />;
        },
      },
    );
  }, [step, steps]);
  return [FunnelComponent, nextStep] as const;
};
