import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import { sidebarItems } from './data/sidebarItems';

function App() {
  return (
    <>
      <Header />
      <Sidebar sidebarItems={sidebarItems} />
      <Main />
    </>
  );
}

export default App;
