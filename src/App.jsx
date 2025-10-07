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
import ParticipatePage from './pages/participate/index';
import CodePage from './pages/participate/code';
import ConnectPage from './pages/participate/connect';
import DesignPage from './pages/participate/design';
import DocumentPage from './pages/participate/document';
import HelpPage from './pages/participate/help';
import MeetPage from './pages/participate/meet';
import ReviewChangesPage from './pages/participate/review-changes';
import TestPage from './pages/participate/test';
import DonatePage from './pages/donate';
import ArtworkPage from './pages/artwork';
import ChatPage from './pages/chat/index';
import MailingListsPage from './pages/mailing-lists/index';
import AwardsPage from './pages/awards/index';
import ConductPage from './pages/project/conduct';
import AdvisoriesIndex from './pages/security/AdvisoriesIndex';
import AdvisoryDetail from './pages/security/AdvisoryDetail';
import IssuesIndex from './pages/security/IssuesIndex';

import SecurityIndex from './pages/security/Index';
import CnaPage from './pages/security/Cna';
import FixingPage from './pages/security/Fixing';
import ForAdministratorsPage from './pages/security/ForAdministrators';
import ForMaintainersPage from './pages/security/ForMaintainers';
import ImprovementsPage from './pages/security/Improvements';
import GiftRedirect from './pages/security/Gift';
import PluginsPage from './pages/security/Plugins';
import ReportingPage from './pages/security/Reporting';
import SchedulingPage from './pages/security/Scheduling';
import TeamPage from './pages/security/Team';
import TerminologyPage from './pages/security/Terminology';
import VulnerabilitiesPage from './pages/security/Vulnerabilities';import ChangelogStablePage from './pages/changelog-stable';
import ChangelogStableOldPage from './pages/changelog-stable-old';
import ChangelogWeeklyPage from './pages/changelog';
import ChangelogWeeklyOldPage from './pages/changelog-old';
import ChangelogEntryPage from './pages/changelog-entry';
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
        <Route path="participate" element={<ParticipatePage />} />
        <Route path="participate/code" element={<CodePage />} />
        <Route path="participate/connect" element={<ConnectPage />} />
        <Route path="participate/design" element={<DesignPage />} />
        <Route path="participate/document" element={<DocumentPage />} />
        <Route path="participate/help" element={<HelpPage />} />
        <Route path="participate/meet" element={<MeetPage />} />
        <Route path="participate/review-changes" element={<ReviewChangesPage />} />
        <Route path="participate/test" element={<TestPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="mailing-lists" element={<MailingListsPage />} />
        <Route path="awards" element={<AwardsPage />} />
        <Route path="project/conduct" element={<ConductPage />} />
        <Route path="security/advisories" element={<AdvisoriesIndex />} />
        <Route path="security/advisory/:date/*" element={<AdvisoryDetail />} />
        <Route path="security/issues" element={<IssuesIndex />} />
        <Route path="security" element={<SecurityIndex />} />
        <Route path="security/cna" element={<CnaPage />} />
        <Route path="security/fixing" element={<FixingPage />} />
        <Route path="security/for-administrators" element={<ForAdministratorsPage />} />
        <Route path="security/for-maintainers" element={<ForMaintainersPage />} />
        <Route path="security/improvements" element={<ImprovementsPage />} />
        <Route path="security/gift" element={<GiftRedirect />} />
        <Route path="security/advisories" element={<AdvisoriesIndex />} />
        <Route path="security/advisory/:date/*" element={<AdvisoryDetail />} />
        <Route path="security/issues" element={<IssuesIndex />} />
        <Route path="security/plugins" element={<PluginsPage />} />
        <Route path="security/reporting" element={<ReportingPage />} />
        <Route path="security/scheduling" element={<SchedulingPage />} />
        <Route path="security/team" element={<TeamPage />} />
        <Route path="security/terminology" element={<TerminologyPage />} />
        <Route path="security/vulnerabilities" element={<VulnerabilitiesPage />} />
        <Route path="changelog-stable" element={<ChangelogStablePage />} />
        <Route path="changelog-stable-old" element={<ChangelogStableOldPage />} />
        <Route path="changelog" element={<ChangelogWeeklyPage />} />
        <Route path="changelog-old" element={<ChangelogWeeklyOldPage />} />
        <Route path="changelog/:version" element={<ChangelogEntryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
