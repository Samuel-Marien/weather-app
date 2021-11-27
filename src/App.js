import { Provider } from './components/context';

import './App.css';

import MyInput from './components/MyInput';
import WeatherCard from './components/WeatherCard';
import MyButton from './components/MyButton';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="p-6 items-center justify-center">
          <MyInput />
          <WeatherCard />
          <MyButton />
        </div>
      </div>
    </Provider>
  );
}

export default App;
