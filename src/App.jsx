import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import NoteList from './routes/NoteList/NoteList';
import NoteView from './routes/NoteView/NoteView';
import data from './data/data.json'
import { useState } from 'react';

function App() {

  const [list, setList] = useState(data)
  console.log(list)
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/list' element={<NoteList list={list} setList={setList} />}>
              <Route index element={<main style={{ padding: "2rem" }}><h2>Title and Body</h2></main>} />
              <Route path='/list/:id' element={<NoteView list={list} setList={setList}  />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

 export default App;
