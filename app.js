const form = document.querySelector('#tvForm')
const button = document.querySelector('#tvSubmit')

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    const userInput = form.elements.query.value;
    // const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${userInput}`)
    const config = {params:{q: userInput}, headers: {}}
    const response = await axios.get(`http://api.tvmaze.com/search/shows?`, config)
    // const img = document.createElement('IMG');
    // img.src = response.data[0].show.image.medium;
    // document.body.append(img)
     getMovieImage(response.data) //pass through the response.data through to the getMovieImage function
    //thus, the function will process response.show.image which is the image link of the show
    form.elements.query.value = ''
})

const getMovieImage = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium; //result = response.data. this is where the response.data comes into play. the first one will be data[0]
            document.body.append(img)
        }
        
    }
}

// const tvImageSearch = async () => {
//     try{
//         const resolve = await axios.get('http://api.tvmaze.com/search/shows/')
//     }
//     catch(e){
//         console.log('error,please try again.',e)
//     }
// }