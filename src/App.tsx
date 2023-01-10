/* eslint-disable */
import './App.css';
import { Immutable } from './pages/immutable';
import { Parent } from './pages/renderTest/Parent';
import { FalsyTruthy } from './pages/falsyTruthy';
import { ConditionalRendering } from './pages/conditionalRendering';

function App() {
  // return <Parent />;
  // return <FalsyTruthy />;
  return <ConditionalRendering />;
}

export default App;
