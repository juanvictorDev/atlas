import './App.css';
import { Banner } from './components/banner';
import { Copy } from './components/copy';
import { FirstFeature } from './components/first-feature';
import { Form } from './components/form';
import { Info } from './components/info';
import { LastFeature } from './components/last-feature';
import { Partnes } from './components/partnes';
import { Prices } from './components/prices';



function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Info />
        <FirstFeature />
        <LastFeature />
        <Prices />
      </main>
      <Partnes />
      <footer>
        <Form />
        <Copy />
      </footer>
    </div>
  );
}

export default App;
