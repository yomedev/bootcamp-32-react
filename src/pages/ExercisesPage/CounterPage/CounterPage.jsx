import { useSelector, useDispatch } from 'react-redux';
import { minusAction, plusAction } from '../../../redux/counter/action.counter';


export const CounterPage = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={() => dispatch(minusAction(10))}>
          Minus
        </button>
        <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={() => dispatch(plusAction(10))}>
          Plus
        </button>
      </div>
    </div>
  );
};