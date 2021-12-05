import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';
import ForecastBox from './components/ForecastBox';

const myUrl =
  'https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_960_720.jpg';

function App() {
  return (
    <Provider>
      <div
        style={{
          background: `url(${myUrl}) no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        <div className="p-5 px-16 pb-10 flex justify-between border border-gray-300">
          <WeatherCard />
          <div className="self-end w-full">
            <ForecastBox />
          </div>
          <div className="flex-col ">
            <Clock />
            <div className="flex justify-end">
              <CitySaveBox />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
