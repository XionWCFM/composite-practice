import React from 'react';
import { UserTracker } from '../model/user-tracker';

export const useClickLogging = (): UserTracker => {
  const [user, setUser] = React.useState({
    userId: '안녕하세요',
    userGender: 'male',
    userName: '우은희',
  });
  return {
    track: (eventName, eventPath, options) => {
      console.log('이렇게 로그를 찍습니다.', eventName, eventPath, user.userId);
    },
  };
};
