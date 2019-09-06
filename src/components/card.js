export default class Card {
  constructor(element) {
      const CONTAINER = document.getElementById('container');
      CONTAINER
        .appendChild(document.createElement('div'))
        .classList += 'item';
      CONTAINER
        .lastChild
        .appendChild(document.createElement('div'))
        .classList += 'title';
      CONTAINER
        .lastChild
        .getElementsByClassName('title')[0]
        .innerText += element.title;
      CONTAINER
        .lastChild
        .appendChild(document.createElement('div'))
        .classList += 'description';
      CONTAINER
        .lastChild
        .getElementsByClassName('description')[0]
        .innerText += element.description;
      CONTAINER
        .lastChild
        .appendChild(document.createElement('div'))
        .classList += 'info';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .appendChild(document.createElement('div'))
        .classList += 'info-number';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .appendChild(document.createElement('div'))
        .classList += 'info-string';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-number')[0]
        .appendChild(document.createElement('div'))
        .classList += 'score';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-number')[0]
        .appendChild(document.createElement('div'))
        .classList += 'release';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-string')[0]
        .appendChild(document.createElement('div'))
        .classList += 'director';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-string')[0]
        .appendChild(document.createElement('div'))
        .classList += 'producer';
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-number')[0]
        .getElementsByClassName('score')[0]
        .innerText += 'Score: ' + element.rt_score;
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-number')[0]
        .getElementsByClassName('release')[0]
        .innerText += 'Release: ' + element.release_date;
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-string')[0]
        .getElementsByClassName('director')[0]
        .innerText += 'Director: ' + element.director;
      CONTAINER
        .lastChild
        .getElementsByClassName('info')[0]
        .getElementsByClassName('info-string')[0]
        .getElementsByClassName('producer')[0]
        .innerText += 'Producer: ' + element.producer;
  }

  //Попробовал сделать классом, мб какие-то методы добавлять потом. 

}