const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedFortext;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedFortext = searchField.value;
  getNews();
})

function getNews() {
  const articleRequest = new XMLHttpRequest;
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedFortext}&api-key=95640f06ccb944d297f2456cc7e643e4`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  //console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  // const response = data.response;
  // console.log(response);
  const article = data.response.docs[0];
  const title = article.headline.main;
  const snippet = article.snippet;

  let li = document.createElement('li');
  li.className = 'articleClass';
  li.innerHTML = snippet;
  
  responseContainer.appendChild(li);
}