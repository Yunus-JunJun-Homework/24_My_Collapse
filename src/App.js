import 'bootstrap/dist/css/bootstrap.min.css';
import MyCollapse from './components/MyCollapse';
import './App.css';

function App() {
  const text = 'collapse me';
  return <MyCollapse text={text} opened={false} />;
}

export default App;
