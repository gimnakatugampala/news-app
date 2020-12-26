class News{
    constructor(){
        this.apiKey = '582d2cd0a6a54c83b45858d4d3088a1e';
        this.url = 'https://cors-anywhere.herokuapp.com/'
    }

    async getHeadlines(category) {
        const headlinesResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}&category=${category}`);

        const headlines  = await headlinesResponse.json();

        return headlines;
    }
}