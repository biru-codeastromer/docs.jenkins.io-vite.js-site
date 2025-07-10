import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './Home';
import RoadmapPage from './pages/project/roadmap';
import DownloadPage from './pages/download';
import ParticipatePage from './pages/participate/index';
import CodePage from './pages/participate/code';
import ConnectPage from './pages/participate/connect';
import DesignPage from './pages/participate/design';
import DocumentPage from './pages/participate/document';
import HelpPage from './pages/participate/help';
import MeetPage from './pages/participate/meet';
import ReviewChangesPage from './pages/participate/review-changes';
import TestPage from './pages/participate/test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project/roadmap" element={<RoadmapPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="participate" element={<ParticipatePage />} />
        <Route path="participate/code" element={<CodePage />} />
        <Route path="participate/connect" element={<ConnectPage />} />
        <Route path="participate/design" element={<DesignPage />} />
        <Route path="participate/document" element={<DocumentPage />} />
        <Route path="participate/help" element={<HelpPage />} />
        <Route path="participate/meet" element={<MeetPage />} />
        <Route path="participate/review-changes" element={<ReviewChangesPage />} />
        <Route path="participate/test" element={<TestPage />} />
      </Route>
    </Routes>
  );
}

export default App;
