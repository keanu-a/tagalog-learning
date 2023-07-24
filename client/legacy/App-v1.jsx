import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../src/pages/homePage/Home';
import LearnPage from '../src/pages/learnPage/LearnPage';
import Conjugate from '../src/pages/conjugatePage/ConjugatePage';
import LessonPage from '../src/pages/lessonPage/LessonPage';
import SectionPage from '../src/pages/sectionPage/SectionPage';
import LoginPage from '../src/pages/loginPage/LoginPage';
import TranslatePage from '../src/pages/translatePage/TranslatePage';
import Word from '../src/components/word/Word';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="learn" element={<LearnPage />}>
          <Route path="sections/:sectionTitle" element={<SectionPage />} />
        </Route>

        <Route path="conjugate" element={<Conjugate />} />
        <Route path="translate" element={<TranslatePage />}>
          <Route path=":word" element={<Word />} />
        </Route>

        <Route path="lesson/:lessonTitle" element={<LessonPage />} />

        <Route path="*" element={<div>ERROR</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
