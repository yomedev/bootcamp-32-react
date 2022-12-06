import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCounter } from './hook';

export const CounterPage = () => {
  const counter = useSelector(state => state.counter)
  const isLoading = useSelector(state => state.isLoading)
  console.log(counter);
  const dispatch = useDispatch()

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={() => dispatch({ type: 'minus', payload: 10 })}>
          Minus
        </button>
        <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={() => dispatch({ type: 'plus', payload: 10 })}>
          Plus
        </button>
      </div>
    </div>
  );
};