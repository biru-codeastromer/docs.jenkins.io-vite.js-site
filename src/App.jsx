import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import RoadmapPage from './pages/project/roadmap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project/roadmap" element={<RoadmapPage />} />
      </Route>
    </Routes>
  );
}

export default App;