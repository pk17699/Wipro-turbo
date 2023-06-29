// these two arrays are used for storing data for further use
let moviesList = [];
let favouriteMovies = [];

const getMovies = () =>{
    return fetch('http://localhost:3000/movies').then(res => {
        if(res.status == 200) return res.json();
        else if(response.status == 404) return Promise.reject(new Error('Invalid URL'))
        else if(response.status == 401) return Promise.reject(new Error('UnAuthorized User...'));
        else return Promise.reject(new Error('Internal Server Error'));
    }).then(data=>{
        moviesList = data;
        displaymoviesList(moviesList);
        return data;
    }).catch(error=>console.log(error))
}

const displaymoviesList = (moviesList) =>{
    const ele =   document.getElementById('moviesList');
	let htmlString = '';
    moviesList.map(movie=>{
        htmlString += `
        <li>${movie.id}</li>
        <li>${movie.title}</li>
        <li><img src='${movie.poster}' /></li>
        <button class='btn btn-primary' onclick='addFavourite(${movie.id})'>AddToFavourites</button>
        <br><br>
        `
    });
    ele.innerHTML = htmlString;
}

const addFavourite = (id) =>{
    let movieName = moviesList.find(movie =>{
        if(movie.id == id){
            return movie;
        }
    });
    let favExists = favouriteMovies.find(favMovie => {
        if( favMovie.id == movieName.id ){
            return favMovie;
        }
    });
    if(favExists) {
        return Promise.reject(new Error('Movie is already added to favourites'));
    }else{
		return fetch('http://localhost:3000/favourites',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(movieName)
		}
		).then(response => {
				if(response.ok){
					return response.json();
				}
			}
		).then(addedMovie => {
				favouriteMovies.push(addedMovie);
				displayFavouriteMovies(favouriteMovies);
				return favouriteMovies;
			}
		)
	}
}


const getFavourites = () =>{
    return fetch('http://localhost:3000/favourites').then(res => {
        if(res.status == 200) return res.json();
        else if(res.status == 401) return Promise.reject(new Error('UnAuthorized User...'));
        else if(res.status == 404) return Promise.reject(new Error('Invalid URL'));
        else return Promise.reject(new Error('Internal Server Error'));
    }).then(data => {
        favouriteMovies = data;
        displayFavouriteMovies(favouriteMovies);
        return data;
    }).catch(error=>console.log(error));
}

const displayFavouriteMovies = (favouriteMovies) =>{
    const ele = document.getElementById('favouritesList');
    let htmlString = '';
    favouriteMovies.map(favorite=>{
        htmlString += `
        <li>${favorite.id}</li>
        <li>${favorite.title}</li>
        <li><img src='${favorite.poster}' /></li>
        <button class='btn btn-danger' onclick='deleteFavourite(${favorite.id})'>delete</button>
        <br><br>
        `
    })
    ele.innerHTML = htmlString;
}

const deleteFavourite = (id) =>{
    fetch(`http://localhost:3000/favourites/${id}`, { method: "DELETE" })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(() => {
      document.getElementById(id).remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
    getMovies,
    getFavourites,
    addFavourite
};