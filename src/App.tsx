/* eslint-disable */
import './App.css';
import { Immutable } from './pages/Immutable';
import { Route, Routes } from 'react-router-dom';
import { ConditionalRendering } from './pages/ConditionalRendering';
import { FalsyTruthy } from './pages/FalsyTruthy';
import { Parent } from './pages/RenderTest/Parent';
import { UploadImage } from './pages/UploadImage';
import { Glassmorphism } from './pages/Glassmorphism';
import { Memoization } from './pages/Memoization';

function App() {
  return (
    <Routes>
      <Route path="/conditionalRendering" element={<ConditionalRendering />} />
      <Route path="/falsyTruthy" element={<FalsyTruthy />} />
      <Route path="/immutable" element={<Immutable />} />
      <Route path="/renderTest" element={<Parent />} />
      <Route path="/uploadImage" element={<UploadImage />} />
      <Route path="/glassmorphism" element={<Glassmorphism />} />
      <Route path="/memoization" element={<Memoization />} />
    </Routes>
  );
}

export default App;
