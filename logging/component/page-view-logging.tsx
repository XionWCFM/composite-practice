import { usePageViewLogging } from '../hook/use-page-view-logging';
import { UserEventName } from '../model/user-event-name';
import { UserEventPath } from '../model/user-event-path';

export const PageViewLogging = ({
  children,
  eventName,
  eventPath,
  option,
}: {
  children?: React.ReactNode;
  eventName: UserEventName;
  eventPath: UserEventPath;
  option?: Record<string, unknown>;
}) => {
  usePageViewLogging({ eventName, eventPath, option });
  return <>{children}</>;
};
