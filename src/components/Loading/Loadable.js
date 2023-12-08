import React, { Suspense } from 'react';

// project import
import { Loader } from './Loader';
// eslint-disable-next-line react/display-name
const Loadable = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default Loadable;

