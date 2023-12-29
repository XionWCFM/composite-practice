import React from 'react';

export const withCertified = <P extends object>(
  Component: React.FunctionComponent<P>,
) => {
  const WrappingComponent = (prop: P) => {
    return <Component {...prop} />;
  };
  WrappingComponent.displayName = 'certified';

  return WrappingComponent;
};
