import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout';
import { Counter } from './Counter';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />}></Route>
      </Routes>
    </div>
  );
};
