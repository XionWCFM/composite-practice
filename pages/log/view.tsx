import useIntersectionObserver from '@/logging/hook/use-intersection-observer';
import React from 'react';

interface viewProps {}

const View = ({}: viewProps) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const firstSee = React.useRef<boolean>(false);

  const onOneTimeIntersect = () => {
    if (firstSee.current) {
      return;
    } else {
      firstSee.current = true;
      console.log('한번만 인터섹트합니다.');
    }
  };

  const onIntersect = () => {
    console.log('계속 인터섹트중입니다.');
  };

  useIntersectionObserver({
    target: targetRef,
    threshold: 0.5,
    onIntersect: onIntersect,
  });
  return (
    <div>
      <div className=" h-[200vh] bg-slate-500"></div>
      <div className=" h-[20vh] bg-red-200" ref={targetRef}></div>
    </div>
  );
};

export default View;
