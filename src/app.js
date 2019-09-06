import Card from './components/card';
import Request from './request'
import './style.scss';

Request('get', 'https://ghibliapi.herokuapp.com/films/')
  .then ((data) => {

  console.log(data);

  for( var i = 0; i < data.body.length; i++) {
    new Card(data.body[i]);
  };
});
