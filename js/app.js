// Base de datos de películas por género y estado de ánimo
const moviesDatabase = {
    accion: {
        feliz: [
            { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, director: "George Miller" },
            { title: "John Wick", year: 2014, rating: 7.4, director: "Chad Stahelski" },
            { title: "Guardianes de la Galaxia", year: 2014, rating: 8.0, director: "James Gunn" }
        ],
        emocionado: [
            { title: "Misión Imposible: Fallout", year: 2018, rating: 7.7, director: "Christopher McQuarrie" },
            { title: "The Dark Knight", year: 2008, rating: 9.0, director: "Christopher Nolan" },
            { title: "Avengers: Endgame", year: 2019, rating: 8.4, director: "Russo Brothers" }
        ],
        triste: [
            { title: "Logan", year: 2017, rating: 8.1, director: "James Mangold" },
            { title: "Blade Runner 2049", year: 2017, rating: 8.0, director: "Denis Villeneuve" }
        ],
        relajado: [
            { title: "Baby Driver", year: 2017, rating: 7.6, director: "Edgar Wright" },
            { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, director: "Bob Persichetti" }
        ],
        nostalgico: [
            { title: "Top Gun: Maverick", year: 2022, rating: 8.3, director: "Joseph Kosinski" },
            { title: "Terminator 2", year: 1991, rating: 8.6, director: "James Cameron" }
        ]
    },
    comedia: {
        feliz: [
            { title: "La La Land", year: 2016, rating: 8.0, director: "Damien Chazelle" },
            { title: "El Gran Hotel Budapest", year: 2014, rating: 8.1, director: "Wes Anderson" },
            { title: "¿Qué pasó ayer?", year: 2009, rating: 7.7, director: "Todd Phillips" }
        ],
        emocionado: [
            { title: "21 Jump Street", year: 2012, rating: 7.2, director: "Phil Lord" },
            { title: "Deadpool", year: 2016, rating: 8.0, director: "Tim Miller" }
        ],
        triste: [
            { title: "Jojo Rabbit", year: 2019, rating: 7.9, director: "Taika Waititi" },
            { title: "Little Miss Sunshine", year: 2006, rating: 7.8, director: "Jonathan Dayton" }
        ],
        relajado: [
            { title: "Amélie", year: 2001, rating: 8.3, director: "Jean-Pierre Jeunet" },
            { title: "Moonrise Kingdom", year: 2012, rating: 7.8, director: "Wes Anderson" }
        ],
        nostalgico: [
            { title: "Volver al Futuro", year: 1985, rating: 8.5, director: "Robert Zemeckis" },
            { title: "El Club de los Cinco", year: 1985, rating: 7.8, director: "John Hughes" }
        ]
    },
    drama: {
        feliz: [
            { title: "La Vida es Bella", year: 1997, rating: 8.6, director: "Roberto Benigni" },
            { title: "Forrest Gump", year: 1994, rating: 8.8, director: "Robert Zemeckis" }
        ],
        emocionado: [
            { title: "El Lobo de Wall Street", year: 2013, rating: 8.2, director: "Martin Scorsese" },
            { title: "Whiplash", year: 2014, rating: 8.5, director: "Damien Chazelle" }
        ],
        triste: [
            { title: "Manchester by the Sea", year: 2016, rating: 7.8, director: "Kenneth Lonergan" },
            { title: "El Pianista", year: 2002, rating: 8.5, director: "Roman Polanski" },
            { title: "La Lista de Schindler", year: 1993, rating: 9.0, director: "Steven Spielberg" }
        ],
        relajado: [
            { title: "Lost in Translation", year: 2003, rating: 7.7, director: "Sofia Coppola" },
            { title: "Her", year: 2013, rating: 8.0, director: "Spike Jonze" }
        ],
        nostalgico: [
            { title: "Cinema Paradiso", year: 1988, rating: 8.5, director: "Giuseppe Tornatore" },
            { title: "El Show de Truman", year: 1998, rating: 8.2, director: "Peter Weir" }
        ]
    },
    "ciencia-ficcion": {
        feliz: [
            { title: "WALL-E", year: 2008, rating: 8.4, director: "Andrew Stanton" },
            { title: "Guardianes de la Galaxia", year: 2014, rating: 8.0, director: "James Gunn" }
        ],
        emocionado: [
            { title: "Inception", year: 2010, rating: 8.8, director: "Christopher Nolan" },
            { title: "The Matrix", year: 1999, rating: 8.7, director: "Wachowski Sisters" },
            { title: "Interstellar", year: 2014, rating: 8.6, director: "Christopher Nolan" }
        ],
        triste: [
            { title: "Blade Runner 2049", year: 2017, rating: 8.0, director: "Denis Villeneuve" },
            { title: "Her", year: 2013, rating: 8.0, director: "Spike Jonze" }
        ],
        relajado: [
            { title: "Arrival", year: 2016, rating: 7.9, director: "Denis Villeneuve" },
            { title: "Ex Machina", year: 2014, rating: 7.7, director: "Alex Garland" }
        ],
        nostalgico: [
            { title: "E.T. el Extraterrestre", year: 1982, rating: 7.9, director: "Steven Spielberg" },
            { title: "Volver al Futuro", year: 1985, rating: 8.5, director: "Robert Zemeckis" }
        ]
    },
    terror: {
        feliz: [
            { title: "Tucker & Dale vs el Mal", year: 2010, rating: 7.5, director: "Eli Craig" },
            { title: "What We Do in the Shadows", year: 2014, rating: 7.6, director: "Taika Waititi" }
        ],
        emocionado: [
            { title: "El Conjuro", year: 2013, rating: 7.5, director: "James Wan" },
            { title: "Get Out", year: 2017, rating: 7.7, director: "Jordan Peele" },
            { title: "A Quiet Place", year: 2018, rating: 7.5, director: "John Krasinski" }
        ],
        triste: [
            { title: "The Babadook", year: 2014, rating: 6.8, director: "Jennifer Kent" },
            { title: "Hereditary", year: 2018, rating: 7.3, director: "Ari Aster" }
        ],
        relajado: [
            { title: "The Others", year: 2001, rating: 7.6, director: "Alejandro Amenábar" },
            { title: "El Sexto Sentido", year: 1999, rating: 8.2, director: "M. Night Shyamalan" }
        ],
        nostalgico: [
            { title: "El Resplandor", year: 1980, rating: 8.4, director: "Stanley Kubrick" },
            { title: "El Exorcista", year: 1973, rating: 8.1, director: "William Friedkin" }
        ]
    },
    romance: {
        feliz: [
            { title: "La La Land", year: 2016, rating: 8.0, director: "Damien Chazelle" },
            { title: "Crazy, Stupid, Love", year: 2011, rating: 7.4, director: "Glenn Ficarra" },
            { title: "About Time", year: 2013, rating: 7.8, director: "Richard Curtis" }
        ],
        emocionado: [
            { title: "500 Días con Ella", year: 2009, rating: 7.7, director: "Marc Webb" },
            { title: "Eternal Sunshine", year: 2004, rating: 8.3, director: "Michel Gondry" }
        ],
        triste: [
            { title: "Blue Valentine", year: 2010, rating: 7.3, director: "Derek Cianfrance" },
            { title: "La La Land", year: 2016, rating: 8.0, director: "Damien Chazelle" }
        ],
        relajado: [
            { title: "Antes del Amanecer", year: 1995, rating: 8.1, director: "Richard Linklater" },
            { title: "Lost in Translation", year: 2003, rating: 7.7, director: "Sofia Coppola" }
        ],
        nostalgico: [
            { title: "The Notebook", year: 2004, rating: 7.8, director: "Nick Cassavetes" },
            { title: "Titanic", year: 1997, rating: 7.9, director: "James Cameron" }
        ]
    },
    animacion: {
        feliz: [
            { title: "Coco", year: 2017, rating: 8.4, director: "Lee Unkrich" },
            { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, director: "Bob Persichetti" },
            { title: "Toy Story 3", year: 2010, rating: 8.3, director: "Lee Unkrich" }
        ],
        emocionado: [
            { title: "Los Increíbles", year: 2004, rating: 8.0, director: "Brad Bird" },
            { title: "Cómo Entrenar a tu Dragón", year: 2010, rating: 8.1, director: "Dean DeBlois" }
        ],
        triste: [
            { title: "Up", year: 2009, rating: 8.3, director: "Pete Docter" },
            { title: "Inside Out", year: 2015, rating: 8.1, director: "Pete Docter" }
        ],
        relajado: [
            { title: "Mi Vecino Totoro", year: 1988, rating: 8.1, director: "Hayao Miyazaki" },
            { title: "WALL-E", year: 2008, rating: 8.4, director: "Andrew Stanton" }
        ],
        nostalgico: [
            { title: "El Rey León", year: 1994, rating: 8.5, director: "Roger Allers" },
            { title: "Toy Story", year: 1995, rating: 8.3, director: "John Lasseter" }
        ]
    },
    thriller: {
        feliz: [
            { title: "Ocean's Eleven", year: 2001, rating: 7.7, director: "Steven Soderbergh" },
            { title: "Baby Driver", year: 2017, rating: 7.6, director: "Edgar Wright" }
        ],
        emocionado: [
            { title: "El Origen", year: 2010, rating: 8.8, director: "Christopher Nolan" },
            { title: "Parasite", year: 2019, rating: 8.5, director: "Bong Joon-ho" },
            { title: "Se7en", year: 1995, rating: 8.6, director: "David Fincher" }
        ],
        triste: [
            { title: "Prisoners", year: 2013, rating: 8.1, director: "Denis Villeneuve" },
            { title: "Zodiac", year: 2007, rating: 7.7, director: "David Fincher" }
        ],
        relajado: [
            { title: "Gone Girl", year: 2014, rating: 8.1, director: "David Fincher" },
            { title: "Shutter Island", year: 2010, rating: 8.2, director: "Martin Scorsese" }
        ],
        nostalgico: [
            { title: "El Silencio de los Inocentes", year: 1991, rating: 8.6, director: "Jonathan Demme" },
            { title: "Psicosis", year: 1960, rating: 8.5, director: "Alfred Hitchcock" }
        ]
    }
};

// Estado de la aplicación
let currentUser = null;

// Elementos del DOM
const loginSection = document.getElementById('loginSection');
const mainSection = document.getElementById('mainSection');
const loginForm = document.getElementById('loginForm');
const preferencesForm = document.getElementById('preferencesForm');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeUser = document.getElementById('welcomeUser');
const recommendationsSection = document.getElementById('recommendationsSection');
const moviesList = document.getElementById('moviesList');

// Event Listeners
loginForm.addEventListener('submit', handleLogin);
preferencesForm.addEventListener('submit', handlePreferences);
logoutBtn.addEventListener('click', handleLogout);

// Funciones
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        currentUser = username;
        showMainApp();
    }
}

function handleLogout() {
    currentUser = null;
    loginSection.style.display = 'flex';
    mainSection.style.display = 'none';
    loginForm.reset();
    preferencesForm.reset();
    recommendationsSection.style.display = 'none';
    moviesList.innerHTML = '';
}

function showMainApp() {
    loginSection.style.display = 'none';
    mainSection.style.display = 'block';
    welcomeUser.textContent = `Bienvenido, ${currentUser}!`;
}

function handlePreferences(e) {
    e.preventDefault();
    
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;
    
    if (genre && mood) {
        showRecommendations(genre, mood);
    }
}

function showRecommendations(genre, mood) {
    recommendationsSection.style.display = 'block';
    moviesList.innerHTML = '';
    
    let movies = [];
    
    // Obtener películas según género y estado de ánimo
    if (moviesDatabase[genre] && moviesDatabase[genre][mood]) {
        movies = moviesDatabase[genre][mood];
    } else if (moviesDatabase[genre]) {
        // Si no hay películas para ese estado de ánimo específico, mostrar todas del género
        const allMoods = Object.values(moviesDatabase[genre]);
        movies = allMoods.flat().slice(0, 3);
    }
    
    // Si no hay películas, mostrar mensaje
    if (movies.length === 0) {
        moviesList.innerHTML = '<p style="text-align: center; color: #666;">No se encontraron recomendaciones para esta combinación.</p>';
        return;
    }
    
    // Crear tarjetas de películas
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesList.appendChild(movieCard);
    });
    
    // Scroll suave a las recomendaciones
    recommendationsSection.scrollIntoView({ behavior: 'smooth' });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <h3>${movie.title}</h3>
        <p class="movie-info"><strong>Año:</strong> ${movie.year}</p>
        <p class="movie-info"><strong>Director:</strong> ${movie.director}</p>
        <span class="movie-rating">⭐ ${movie.rating}/10</span>
    `;
    
    return card;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si hay sesión guardada (opcional)
    mainSection.style.display = 'none';
    loginSection.style.display = 'flex';
});
