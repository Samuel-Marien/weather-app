import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';
import ForecastBox from './components/ForecastBox';
import BgDisplayer from './components/BgDisplayer';

function App() {
  return (
    <Provider>
      <BgDisplayer>
        <div className="flex justify-center py-8">
          <WeatherCard />
          <div className=" ml-10 flex flex-col justify-between">
            <div className="self-end">
              <Clock />
              <div className="flex justify-end">
                <CitySaveBox />
              </div>
            </div>
            <div className="">
              <ForecastBox />
            </div>
          </div>
        </div>
      </BgDisplayer>
    </Provider>
  );
}

export default App;
