import React from 'react';
import { useClickLogging } from '../hook/use-click-logging';
import { UserEventName } from '../model/user-event-name';
import { UserEventPath } from '../model/user-event-path';

interface ClickLoggingProps {
  children?: React.ReactNode;
  eventName: UserEventName;
  eventPath: UserEventPath;
  options?: Record<string, unknown>;
}

const ClickLogging = ({
  eventName,
  eventPath,
  options,
  children,
}: ClickLoggingProps) => {
  const { track } = useClickLogging();
  const onClick = () => {
    track(eventName, eventPath, options);
  };

  return <button onClick={onClick}>{children}</button>;
};

export default ClickLogging;
