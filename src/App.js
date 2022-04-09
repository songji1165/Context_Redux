import ContextDefault from "./contextDefault";
import ContextRefactor from "./contextRefactor";
import ReduxSample from "./reduxSample";

export default function App() {
  return (
    <>
      <div>
        <h1>기본 context (모두 Rerender) </h1>
        <ContextDefault />
      </div>

      <hr />

      <div>
        <h1>분리된 context (상태변화된 컴포넌트만 Rerender) </h1>
        <ContextRefactor />
      </div>

      <hr />

      <div>
        <h1>redux (상태변화된 컴포넌트만 Rerender) </h1>
        <ReduxSample />
      </div>
    </>
  );
}
