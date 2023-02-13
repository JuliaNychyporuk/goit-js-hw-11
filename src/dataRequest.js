import axios from "axios";
export default class PicturesDataApiServise {
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    async request () {
        const response = await axios.get(`https://pixabay.com/api/?key=29781267-a8728f24297a8bee7a02bc916&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
        this.incrementPage();
        return response.data;
    } 
    
    incrementPage() {
        this.page += 1; 
    }
    
    resetPage() {
        this.page = 1;
    }

    get query () {
        return this.searchQuery;
    }

    set query (newQuery) {
        return this.searchQuery = newQuery
    }

}