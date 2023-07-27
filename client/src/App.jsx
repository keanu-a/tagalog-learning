import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/homePage/Home';
import LearnPage from './pages/learnPage/LearnPage';
import ConjugatePage from './pages/conjugatePage/ConjugatePage';
import LessonPage from './pages/lessonPage/LessonPage';
import SectionPage from './pages/sectionPage/SectionPage';
import LoginPage from './pages/loginPage/LoginPage';
import TranslatePage from './pages/translatePage/TranslatePage';

import Word from './features/translations/components/word/Word';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/learn',
    element: <LearnPage />,
    children: [
      {
        path: 'sections/:sectionTitle',
        element: <SectionPage />,
      },
    ],
  },
  {
    path: '/translate',
    element: <TranslatePage />,
    children: [
      {
        path: ':word',
        element: <Word />,
      },
    ],
  },
  {
    path: '/conjugate',
    element: <ConjugatePage />,
  },
  {
    path: '/lesson/:lessonTitle',
    element: <LessonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
