import ContextDefault from "./contextDefault";
import ContextRefactor from "./contextRefactor";
import ReduxSample from "./reduxSample";

export default function App() {
  return (
    <>
      <div>
        <ContextDefault />
      </div>

      <hr />

      <div>
        <ContextRefactor />
      </div>

      <hr />

      <div>
        <ReduxSample />
      </div>
    </>
  );
}
