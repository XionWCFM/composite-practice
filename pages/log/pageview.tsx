import { PageViewLogging } from '@/logging/component/page-view-logging';
import React from 'react';

interface pageviewProps {}

const Pageview = ({}: pageviewProps) => {
  return (
    <PageViewLogging
      eventName={'example_homepage_view'}
      eventPath={'example_home_page_page'}
    >
      <div className="">hi</div>
    </PageViewLogging>
  );
};

export default Pageview;
