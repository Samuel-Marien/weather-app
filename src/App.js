import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="m-24  items-center justify-center border border-gray-300">
          <WeatherCard />
          <CitySaveBox />
        </div>
      </div>
    </Provider>
  );
}

export default App;
