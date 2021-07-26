import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increase5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase5Handler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// METHOD 2 :

// import classes from "./Counter.module.css";

// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector(state => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({
//       type: "increment",
//     });
//   };

//   const decrementHandler = () => {
//     dispatch({
//       type: "decrememt",
//     });
//   };

//   const increase5Handler =() => {
//     dispatch({
//       type: 'increaseBy5',
//       payload : 5
//     })
//   }

//   const toggleCounterHandler = () => {
//     dispatch({
//       type: 'toggle'
//     })
//   }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler} >Increment</button>
//         <button onClick={increase5Handler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
