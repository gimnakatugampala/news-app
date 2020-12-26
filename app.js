const clickHeadlines = document.getElementById('Headlines');
const clickSearch = document.getElementById('Search');
const jumboheadlines = document.querySelector('.headlines');
const jumboSearch = document.querySelector('.searchnews');
const submitHeadlines = document.getElementById('submitHeadlines');

//Init News 
const news = new News();

//Show search news
clickSearch.addEventListener('click',(e) =>{
    e.preventDefault()
    jumboSearch.style.display = 'block'
    jumboheadlines.style.display = 'none'
    clickHeadlines.style.display = 'block'
    clickSearch.style.display = 'none'
})

//show headlines
clickHeadlines.addEventListener('click',(e) =>{
    e.preventDefault()
    jumboSearch.style.display = 'none'
    jumboheadlines.style.display = 'block'
    clickHeadlines.style.display = 'none'
    clickSearch.style.display = 'block'
})

//get the Headlines Value
submitHeadlines.addEventListener('submit',e =>{
    e.preventDefault();
    const selectHeadlines = document.getElementById('selectHeadlines').value;
    
    //pass the category of news headlines
    news.getHeadlines(selectHeadlines)
    .then(data => console.log(data))
})