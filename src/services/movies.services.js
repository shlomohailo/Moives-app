const movies_API = "https://my-json-server.typicode.com/Jeck99/movies-api/movies";

export const getMovies = async () => {
    try {
        return await fetch(movies_API)
            .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
}