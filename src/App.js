import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';

function App() {
  return (
    <Provider>
      <div>
        <div className="p-5 flex justify-between border border-gray-300">
          <div className="flex">
            <WeatherCard />
            <div className="ml-10">
              <CitySaveBox />
            </div>
          </div>

          <div>
            <Clock />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
