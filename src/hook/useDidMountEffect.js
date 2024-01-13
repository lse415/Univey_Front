import { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(0);
  console.log(deps)
  console.log(didMount)
  useEffect(() => {
    if (didMount.current==3) func();
    else didMount.current += true;
  }, deps);
};

export default useDidMountEffect;