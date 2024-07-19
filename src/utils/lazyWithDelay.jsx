import { lazy } from "react";

const lazyWithDelay = (importFunc, delay) => {
  return lazy(() =>
    Promise.all([
      importFunc(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};

export default lazyWithDelay;
