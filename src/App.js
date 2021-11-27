import { Provider } from './components/context';

import './App.css';

import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="m-24 p-6 items-center justify-center border border-gray-300">
          <WeatherCard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
