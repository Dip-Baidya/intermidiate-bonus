
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React, { useEffect, useState } from 'react';
import MealDetail from './conponents/MealDetail/MealDetail';
import MealFinder from './conponents/MealFinder/MealFinder';



function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

    //single user

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setSingleUser(data))


    // random data load
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setRandomUser(data.results[0]))
  }, [])

  const handleLike = () => {
    // const color = likeColor ? '' : 'primary';
    let color = ''
    if (likeColor) {
      color = '';
    } else {
      color = 'primary';
    }
    setLikeColor(color);
  }
  return (
    <div className="App">
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      <h1>name: {singleUser.name}</h1>
      <h3>Random Gender: {randomUser.name && randomUser.name.first}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
        <MealDetail></MealDetail>
        <MealFinder></MealFinder>
    </div>

  );
}

export default App;
