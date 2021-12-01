import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';

function App() {
  return (
    <Provider>
      <div>
        <div className="p-5 flex-col border border-gray-300">
          <WeatherCard />
          <CitySaveBox />
          <Clock />
        </div>
      </div>
    </Provider>
  );
}

export default App;
