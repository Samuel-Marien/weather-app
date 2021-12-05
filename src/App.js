import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';
import ForecastBox from './components/ForecastBox';

const myUrl =
  'https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_960_720.jpg';

function App() {
  return (
    <Provider>
      <div
        className="overflow-hidden"
        style={{
          background: `url(${myUrl}) no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        <div className="p-5 px-16 pb-10 flex justify-between border border-gray-300">
          <div>
            <WeatherCard />
          </div>
          <div className="self-end w-full ml-5">
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
