import './styles.css';
import IMAGE from './ReactPng.png';
import LOGO from './react-seeklogo.com.svg';
import ClickCounter from './ClickCounter';

const App = () => {
  return (
    <div>
      <h1>Hi This is the App Component - {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="React Logo" />
      <img src={LOGO} alt="React Logo" />
      <ClickCounter />
    </div>
  );
};
export default App;
