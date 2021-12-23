// React-Custom_Hooks_Function-Calling_Custom_Hook_From_Component
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // React-Custom_Hooks_Function-Calling_Custom_Hook_From_Component
  // Here the hooks inside "useCounter()" custom hook
  // is tied to the component it is used in. The states
  // of the hooks inside "useCounter()" custom hook is not
  // shared in between different components just because they
  // are used in different components. This guarantees that
  // none of the hooks are tied in between different components.
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
