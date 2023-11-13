import React from 'react';
import { UserTracker } from '../model/user-tracker';
import { UserEventName } from '../model/user-event-name';
import { UserEventPath } from '../model/user-event-path';

export const usePageViewLogging = ({
  eventName,
  eventPath,
  option,
}: {
  eventName: UserEventName;
  eventPath: UserEventPath;
  option?: Record<string, unknown>;
}) => {
  const [user, setUser] = React.useState({
    userId: '안녕하세요',
    userGender: 'male',
    userName: 'wooeunhe',
  });

  React.useEffect(() => {
    pageViewFetch({ eventName, eventPath, user, option }).then(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const pageViewFetch = async ({
  eventName,
  eventPath,
  user,
  option,
}: {
  eventName: UserEventName;
  eventPath: UserEventPath;
  user: Record<string, unknown>;
  option?: Record<string, unknown>;
}) => {
  const response = await fetch('/api/log/page-view', {
    method: 'POST',
    body: JSON.stringify({
      eventDate: new Date(),
      eventTime: new Date().toISOString(),
      eventName: eventName,
      eventPath: eventPath,
      eventProperty: option || {},
      eventUser: user,
    }),
  });
  const data = await response.json();
  return data;
};
