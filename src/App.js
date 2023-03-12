import './App.css';
import TopArea from './components/TopArea';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import LineCounter from './components/LineCounter';
import Footer from './components/Footer';
import QuizArea from './components/QuizArea';

function App() {
  return (
    <div>
      <MainArea />
      <TopArea />
      <Sidebar />
      <LineCounter />
      <Footer />
      <QuizArea />
    </div>
  );
}

export default App;
