import React from 'react';
import { UserTracker } from '../model/user-tracker';
import { UserEventName } from '../model/user-event-name';
import { UserEventPath } from '../model/user-event-path';

export const useClickLogging = (): UserTracker => {
  const [user, setUser] = React.useState({
    userId: '안녕하세요',
    userGender: 'male',
    userName: '우은희',
  });

  return {
    track: (eventName, eventPath, option) => {
      loggingFetch({ eventName, eventPath, option, user }).then((data) =>
        console.log('서버응답', data),
      );
      console.log({ eventName, eventPath, option, user });
    },
  };
};

const loggingFetch = async ({
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
  const response = await fetch('/api/log/click', {
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
