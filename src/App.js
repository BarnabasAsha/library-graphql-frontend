import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import AuthorsContainer from './pages/authorsContainer';
import BooksContainer from './pages/booksContainer';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/authors" element={<Layout><AuthorsContainer /></Layout>} />
      <Route path="/books" element={<Layout><BooksContainer /></Layout>} />
      <Route path="/" element={<Layout><Home /></Layout>} exact />
    </Routes>
  );
}

export default App;
