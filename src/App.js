import './App.css';
import TopArea from './components/TopArea';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import QuizArea from './components/QuizArea';

function App() {
  return (
    <div>
      <MainArea />
      <TopArea />
      <Sidebar />
      <Footer />
      <QuizArea />

    </div>
  );
}

export default App;
