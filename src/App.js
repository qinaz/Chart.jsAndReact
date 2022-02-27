import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './actions/appleAction';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apple);
  const [num, setNum] = React.useState(50);

  const fetchData = (time) => {
    dispatch(getData({ time: time, number: num }));
  };

  return (
    <div className='App'>
      <div className={'btns-wrapper'}>
        <button onClick={() => fetchData('1min')}>1 min</button>
        <button onClick={() => fetchData('5min')}>5 min</button>
        <button onClick={() => fetchData('15min')}>15 min</button>
        <button onClick={() => fetchData('30min')}>30 min</button>
        <button onClick={() => fetchData('1hour')}>1 hour</button>
        <button onClick={() => fetchData('4hour')}>4 hour</button>

        {state.loading && <p>Loading...</p>}
      </div>
      <div className={'chart-wrapper'}>
        <Line data={state.data} />
      </div>
    </div>
  );
}

export default App;
