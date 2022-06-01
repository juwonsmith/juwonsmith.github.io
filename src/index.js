import advice from './advice_ui/longcode';
// import uiChange from './advice_ui/frontui'


const quote = document.querySelector('.quote');
const imageRef = document.querySelector('.img-dice');
const heading = document.querySelector('.heading');

const firstCall = new advice();

imageRef.addEventListener('click', ()=> {
    firstCall.apiCall().then(data => {
        quote.textContent = `
         ${data.slip.advice}
     `
     heading.textContent = `
        Advice #${data.slip.id}
     `
    }).catch(err => console.log(err));
});
