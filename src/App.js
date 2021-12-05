import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';
import CitySaveBox from './components/CitySaveBox';
import Clock from './components/Clock';

const myUrl =
  'https://cdn.pixabay.com/photo/2021/11/17/10/39/kangaroo-6803201_960_720.jpg';

function App() {
  return (
    <Provider>
      <div
        className=""
        style={{
          background: `url(${myUrl}) no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        <div className="p-5 px-16 flex justify-between border border-gray-300">
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
