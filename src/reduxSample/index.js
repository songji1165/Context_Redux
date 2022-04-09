import { createStore } from "redux";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

const TOGGLE_MODAL = "modal/TOGGLE_MODAL";
const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};
function modalReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
}

export default function ReduxSample() {
  return (
    <Provider store={createStore(modalReducer)}>
      <ModalBtn />
      <Modal />
    </Provider>
  );
}

const Modal = () => {
  const show = useSelector((state) => state);
  console.log("3. Modal render");
  return show && <div>모달 열었지롱</div>;
};

const ModalBtn = () => {
  const dispatch = useDispatch();

  console.log("3. ModalBtn render");
  return <button onClick={() => dispatch(toggleModal())}>모달3 토글</button>;
};
