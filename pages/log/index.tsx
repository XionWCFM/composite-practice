import ClickLogging from '@/logging/component/click-logging';
import React from 'react';

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <div>
      <ClickLogging
        eventName={'example_example-button_click'}
        eventPath={'example_main_top_example-button'}
      >
        <div>이게 버튼이란거고 이건 로깅이야</div>
      </ClickLogging>
    </div>
  );
};

export default index;
