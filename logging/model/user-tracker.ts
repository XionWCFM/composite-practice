import { UserEventPath } from './user-event-path';
import { UserEventName } from './user-event-name';

export type UserTracker<
  OptionProperty extends Record<string, unknown> = Record<string, unknown>,
> = {
  track(
    eventName: UserEventName,
    evnetPath: UserEventPath,
    properties?: OptionProperty,
  ): void;
};
