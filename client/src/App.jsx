import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/homePage/Home';
import LearnPage from './pages/learnPage/LearnPage';
import Conjugate from './pages/conjugatePage/ConjugatePage';
import LessonPage from './pages/lessonPage/LessonPage';
import SectionPage from './pages/sectionPage/SectionPage';
import LoginPage from './pages/loginPage/LoginPage';
import TranslatePage from './pages/translatePage/TranslatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="learn" element={<LearnPage />} />
        <Route path="conjugate" element={<Conjugate />} />
        <Route path="translate" element={<TranslatePage />} />

        <Route path="lesson/:lessonTitle" element={<LessonPage />} />
        <Route path="sections/:sectionTitle" element={<SectionPage />} />

        <Route path="*" element={<div>ERROR</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
