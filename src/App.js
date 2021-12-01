import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';

function App() {
  return (
    <Provider>
      <div className="App w-2/3 mx-auto">
        <div className="mt-24 flex border border-gray-300">
          <WeatherCard />
          <CitySaveBox />
          <Clock />
        </div>
      </div>
    </Provider>
  );
}

export default App;
