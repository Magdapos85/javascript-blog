'use strict';
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
const titleClickHandler = function(event){
    event.preventDefault();
  const clickedElement = this;
  const clickedElement = active;

  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.articles a.active');

  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
   const articleSelector = href;
  atrybut = element.articleSelector(href);
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector (href);
  console.log (article);

  /* add class 'active' to the correct article */
}
const targetArticle = document.querySelector ('.articles a.active');
console.log (article);

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
