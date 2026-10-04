import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ChapterList } from './pages/ChapterList';
import { ChapterDetail } from './pages/ChapterDetail';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { QuizPage } from './pages/QuizPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { CertificatePage } from './pages/CertificatePage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'bab', element: <ChapterList /> },
        { path: 'bab/:slug', element: <ChapterDetail /> },
        { path: 'flashcard', element: <FlashcardsPage /> },
        { path: 'quiz', element: <QuizPage /> },
        { path: 'simulator', element: <SimulatorPage /> },
        { path: 'glosarium', element: <GlossaryPage /> },
        { path: 'sertifikat', element: <CertificatePage /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: '/akuntansi-investasi-SAKEP' }
);