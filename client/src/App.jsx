import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/homePage/Home';
import StartLearning from './pages/startLearningPage/StartLearning';
import Conjugate from './pages/conjugatePage/Conjugate';
import LessonInfo from './components/lessonInfo/LessonInfo';
import LessonPage from './pages/lessonPage/LessonPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson">
          <Route path=":lessonTitle" element={<LessonPage />} />
        </Route>
        <Route path="/start-learning" element={<StartLearning />}>
          <Route path=":lessonId" element={<LessonInfo />} />
        </Route>
        <Route path="/conjugate" element={<Conjugate />} />
      </Routes>
    </div>
  );
}

export default App;
