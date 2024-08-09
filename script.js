// api for dictionary : https://api.dictionaryapi.dev/api/v2/entries/en/hello


const InputWord = document.querySelector('.inpWord')
const SearchButt = document.querySelector('.searchButton')
const wordDetails = document.querySelector('#info')
const Learn = document.querySelector('.viewmore')

async function fetchword(spel){
    try {
        
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${spel}`)
    
    const response = await data.json()
    // console.log(response[0].meanings[1].definitions[0].definition)
    
    wordDetails.innerHTML = `
    <h2>Word : <i>${InputWord.value}</i></h2> <h5>${response[0].meanings[1].partOfSpeech}</h5>
    <h2>Meaning </h2>
    <li>${response[0].meanings[0].definitions[0].definition === undefined ?'Not Found':response[0].meanings[0].definitions[0].definition} </li>
    <h2>Example </h2>
    <li>${response[0].meanings[0].definitions[0].definition.example  === undefined ?'Not Found':response[0].meanings[0].definitions[0].definition.example}</li>
    <h2>Antonyms </h2>
    <li>${response[0].meanings[0].antonyms[0]  === undefined ?'Not Found':response[0].meanings[0].antonyms[0]}</li>    
    ` 
    const button = document.createElement('button')
    button.classList.add('viewmore')
    button.innerHTML = `<a href="https://en.wiktionary.org/wiki/${InputWord.value}">Learn more </a>` 
    wordDetails.appendChild(button)
} catch (error) {
        wordDetails.innerHTML = 'Err: Type something else '
    }
}

SearchButt.addEventListener('click',function(eve){
    eve.preventDefault()
    fetchword(InputWord.value)
})

Learn.addEventListener('click',function(e){
    e.preventDefault()

})



    //console.log(response[0].meanings[1].definitions[0].definition);// this is how we will get the value of the word we want ....but only one meaning will be given with this format....to get all the defi.

//  response.forEach(loopA => {//to iterate through all the elements foreach loop is best ...normal for loop doesnt work properly some times
//         loopA.meanings.forEach(loopB => {
//             loopB.definitions.forEach(loopC =>{
//                 console.log(loopC.definition)
//             })
//         });
//     });

// normal for loop
// for (let a = 0; a < 2; a++) {
//             const loopA = response[a]
//             for (let b = 0; b < response.length; b++) {
//                 const loopB = loopA.meanings[b]
//                 for (let c = 0; c < response.length; c++) {
//                     const loopC = loopB.definitions[c].definition
//                     console.log(loopC)                    
                    
//                 }
//             }            
//         }