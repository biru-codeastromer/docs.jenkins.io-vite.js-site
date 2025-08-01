import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './Home';
import RoadmapPage from './pages/project/roadmap';
import DownloadPage from './pages/download';
import EventsIndex from './pages/events/index';
import OnlineMeetup from './pages/events/online-meetup';
import ContributorSummit from './pages/events/contributor-summit';
import DevOpsWorld from './pages/events/devops-world';
import Hacktoberfest from './pages/events/hacktoberfest';
import HacktoberfestFaq from './pages/events/faq';
import HacktoberfestEventKit from './pages/events/event-kit';
import JamPage from './pages/projects/jam';
import BooksPage from './pages/books/index';
import PressPage from './pages/press';

import ArtworkPage from './pages/artwork';
import ChatPage from './pages/chat/index';
import AwardsPage from './pages/awards/index';

import ConductPage from './pages/project/conduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project/roadmap" element={<RoadmapPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="events" element={<EventsIndex />} />
        <Route path="events/online-meetup" element={<OnlineMeetup />} />
        <Route path="events/contributor-summit" element={<ContributorSummit />} />
        <Route path="events/devops-world" element={<DevOpsWorld />} />
        <Route path="events/hacktoberfest" element={<Hacktoberfest />} />
        <Route path="events/hacktoberfest/faq" element={<HacktoberfestFaq />} />
        <Route path="events/hacktoberfest/event-kit" element={<HacktoberfestEventKit />} />
        <Route path="projects/jam" element={<JamPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="press" element={<PressPage />} />
        <Route path="artwork" element={<ArtworkPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="awards" element={<AwardsPage />} />
        <Route path="project/conduct" element={<ConductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
