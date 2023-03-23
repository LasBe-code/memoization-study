import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ConditionalRendering, FalsyTruthy, Immutable, Parent, UploadImage, Glassmorphism, Memoization } from './pages';
import { Debounce } from './pages/Debounce';

function App() {
  return (
    <Routes>
      <Route path="/conditionalRendering" element={<ConditionalRendering />} />
      <Route path="/debounce" element={<Debounce />} />
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
