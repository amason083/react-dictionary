
import './App.css';
import {useState} from 'react';
import WordForm from './Components/WordForm/WordForm.jsx';
import CardContainer from './Components/CardContainer/CardContainer.jsx';


function App() {
  const [words, setWords] = useState([
    { front: 'translation', back: 'Ubersetzung'},
    { front: 'egg',         back: 'Ei'},
    { front: 'taxi',        back: 'Taxi'},
    { front: 'paper',       back: 'Papier'},
    { front: 'square',      back: 'Platz'},
  ]);

  const addWord = (front, back) => {
    const newWords = [...words, {front, back}];
    setWords(newWords);
  }

  const deleteWord = (front) => {
    const newWords = words.filter(word => word.front !== front);
    setWords(newWords);
  }

  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <WordForm addWord={addWord}/>
        <CardContainer words={words} deleteWord={deleteWord}/>
      </main>
    </div>
  );
}

export default App;