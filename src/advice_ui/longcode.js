import './styles/general.css';

class advice{
    constructor(){
        this.AdviceApiUrl = "https://api.adviceslip.com/advice";
    }
    async apiCall(){
        const response = await fetch(this.AdviceApiUrl);
        const data = await response.json();
        return data;//promise
    }
}

export {advice as default}; 