import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './Home';
import RoadmapPage from './pages/project/roadmap';
import DownloadPage from './pages/download';
import AwardsPage from './pages/awards/index';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project/roadmap" element={<RoadmapPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="awards" element={<AwardsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
