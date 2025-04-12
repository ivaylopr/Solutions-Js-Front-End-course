function movies(input) {
    let movies = [];
    input.forEach(row => {
        if (row.includes('addMovie')) {
            let command = row.split('addMovie ');
            const movieToBeAdded = {
                name: command[1],
            }
            movies.push(movieToBeAdded)
        } else if (row.includes('directedBy')) {
            let command = row.split(' directedBy ');
            const movieName = command[0];
            const directorName = command[1];
            let movie = movies.find(x => x.name === movieName);
            if (movie) {
                movie.director=directorName;
            }

        } else if (row.includes('onDate')) {

            let command = row.split(' onDate ');
            const movieName = command[0]
            const date = command[1];
            const movie = movies.find(x => x.name === movieName)
            if (movie) {
                movie.date = date;
            }
        }
    });
    movies.forEach(movie => {
        if (movie.hasOwnProperty('name')
            && movie.hasOwnProperty('director')
            && movie.hasOwnProperty('date')) {
            const movieForPrint = JSON.stringify(movie);
            console.log(movieForPrint);

        }
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
