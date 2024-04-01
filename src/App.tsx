import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Card/Card'
import { Input } from './Input/Input';

const url = 'http://localhost:7070/notes'

function App() {
  const [data, setData] = useState([{id: 0, content: ''}]);
  const [value, setInput] = useState({value: ''})

  const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
        const state = JSON.parse(xhr.response);
        setData(state)
  };

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();

  }

  const handleOnDelte = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elem = e.currentTarget.closest('.card');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      loadData()
    };
    xhr.open(
      "DELETE",
      `${url}/${elem?.id}`
    );
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInput({value: value})
  }

  const handleOnSend = () => {
    const body = {
      id: 0,
      content: value.value
  }
  if (value.value !== '') {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      loadData()
    };
    xhr.open(
      "POST",
       url
    );
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(body));
  }
  }

  const handleOnUpdate = () => {
    loadData()
  }

  useEffect(loadData, [])

  return (
    <div className='container'>
      <div className='title'>
        <h1 className='name'>Notes</h1>
        <button className='update-btn' onClick={handleOnUpdate}></button>
      </div>
      <div className='cards'>
        {data.map(note => note.id !== 0 ? <Card id={note.id} text={note.content} onDelte={handleOnDelte} key={note.id}/> : '')}
      </div>
      <Input onSend={handleOnSend} onChange={handleOnChange}/>
    </div>
  )
}

export default App
