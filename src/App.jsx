import React, { useState, createContext, useContext } from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';

const CurrentComponentContext = createContext('home'); // Initial context value

function App() {
  const [currentComponent, setCurrentComponent] = useState('home');

  const changeComponent = (newComponent) => {
    setCurrentComponent(newComponent);
  }

  return (
    <CurrentComponentContext.Provider value={{ currentComponent, changeComponent }}>
      <div className="App">
        <CurrentComponent />
      </div>
    </CurrentComponentContext.Provider>
  );
}

function CurrentComponent() {
  const { currentComponent, changeComponent } = useContext(CurrentComponentContext);

  let currentView;
  switch (currentComponent) {
    case 'home':
      currentView = <HomeComponent onNext={() => changeComponent('quiz')} />;
      break;
    case 'quiz':
      currentView = <QuizComponent onFinish={() => changeComponent('result')} />;
      break;
    case 'result':
      currentView = <ResultComponent />;
      break;
    default:
      currentView = <div>Error: Unknown component</div>;
  }

  return currentView;
}

export default App;
