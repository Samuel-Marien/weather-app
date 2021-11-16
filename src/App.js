import { Provider } from './components/context';

import './App.css';

import MyInput from './components/MyInput';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="p-6 items-center justify-center">
          <MyInput />
          <WeatherCard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
