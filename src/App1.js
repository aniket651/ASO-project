import logo from './logo.svg';
import './App1.css';
import LoginBox from './components/LoginBox';
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';

function App() {
  return (
    <div className="App">
      <div className='slantdiv'></div>
      <Header1 />
      <LoginBox />
      <Footer1 />
    </div>
  );
}

export default App;
