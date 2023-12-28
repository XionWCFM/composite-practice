import React from 'react';

export const withConsole = <P extends object>(
  Component: React.FunctionComponent<P>,
) => {
  console.log('my first high order component');
  const WrappingComponent = (prop: P) => {
    return <Component {...prop} />;
  };
  WrappingComponent.displayName = Component.displayName;
  return WrappingComponent;
};
