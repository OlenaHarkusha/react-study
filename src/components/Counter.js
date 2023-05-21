import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setStep } from 'redux/Counter/actions';

export const Counter = () => {
  const { total, step } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleClickPlus = () => dispatch(increment(step));
  const handleClickMinus = () => dispatch(decrement(step));
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.step.value;
    dispatch(setStep(Number(value)));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="step"></input>
        <button type="submit">Set step</button>
        <span>{step}</span>
      </form>
      <button onClick={handleClickPlus}>+1</button>
      <button onClick={handleClickMinus}>-1</button>
      <p>{total}</p>
    </div>
  );
};
