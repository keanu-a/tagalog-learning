import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/homePage/Home';
import LearnPage from './pages/learnPage/LearnPage';
import Conjugate from './pages/conjugatePage/Conjugate';
import LessonPage from './pages/lessonPage/LessonPage';
import SectionPage from './pages/sectionPage/SectionPage';
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson">
          <Route path=":lessonTitle" element={<LessonPage />} />
        </Route>

        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/sections">
          <Route path=":sectionTitle" element={<SectionPage />} />
          <Route path=":sectionTitle/:lessonTitle" element={<LessonPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/conjugate" element={<Conjugate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
