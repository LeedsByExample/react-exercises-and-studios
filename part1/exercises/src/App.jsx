import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD:part1/exercises/src/App.js
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks.js';
=======
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
>>>>>>> 23376bea5f18ea7f602882c0c6b0416ab34cc74d:part1/exercises/src/App.jsx

function App() {
  return (
    <div className="App">
      <ChoresList />
      <div className="similarComponents">
        <MovieList />
        <BookList />
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
