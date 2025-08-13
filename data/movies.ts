import type { Movie } from "~/types/movie";

export const moviesData = [
  {
    id: 1,
    title: "Inception",
    genres: ["Action", "Sci-Fi"],
    year: 2010,
    director: "Christopher Nolan",
    rating: 4.8,
    description: "Un voleur s’infiltre dans les rêves pour manipuler la réalité. Un thriller complexe sur les méandres de l’esprit.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    genres: ["Sci-Fi", "Drama"],
    year: 2014,
    director: "Christopher Nolan",
    rating: 4.6,
    description: "Une odyssée spatiale à travers les dimensions pour sauver l’humanité d’une Terre à l’agonie.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/1pnigkWWy8W032o9TKDneBa3eVK.jpg"
  },
  {
    id: 3,
    title: "The Grand Budapest Hotel",
    genres: ["Comedy"],
    year: 2014,
    director: "Wes Anderson",
    rating: 4.1,
    description: "Un concierge excentrique entraîne un jeune employé dans une aventure rocambolesque au cœur de l’Europe.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/atLMzzA7pOB0BdfM89V7BbdtLN6.jpg"
  },
  {
    id: 4,
    title: "Parasite",
    genres: ["Thriller", "Drama"],
    year: 2019,
    director: "Bong Joon-ho",
    rating: 4.6,
    description: "Une famille pauvre infiltre une famille riche — une satire sociale aussi brillante qu’inquiétante.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg"
  },
  {
    id: 5,
    title: "The Godfather",
    genres: ["Crime", "Drama"],
    year: 1972,
    director: "Francis Ford Coppola",
    rating: 4.2,
    description: "L’ascension et la chute d’une puissante famille mafieuse — un classique absolu du cinéma.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/k3uIbYtiuK8pwbCcbma29nTqmgG.jpg"
  },
  {
    id: 6,
    title: "Pulp Fiction",
    genres: ["Crime", "Drama"],
    year: 1994,
    director: "Quentin Tarantino",
    rating: 4.9,
    description: "Des histoires croisées dans un Los Angeles décalé et violent — un chef-d’œuvre du récit non linéaire.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg"
  },
  {
    id: 7,
    title: "The Matrix",
    genres: ["Sci-Fi", "Action"],
    year: 1999,
    director: "The Wachowskis",
    rating: 4.7,
    description: "Et si notre monde n’était qu’une simulation ? Une révolution visuelle et philosophique.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg"
  },
  {
    id: 8,
    title: "Forrest Gump",
    genres: ["Drama", "Romance"],
    year: 1994,
    director: "Robert Zemeckis",
    rating: 4.8,
    description: "Un homme simple traverse les événements marquants de l’Amérique avec candeur et humanité.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/A0Th0x8QIzP0njrFAJnYQ5ouIoB.jpg"
  },
  {
    id: 9,
    title: "The Dark Knight",
    genres: ["Action", "Crime"],
    year: 2008,
    director: "Christopher Nolan",
    rating: 4.0,
    description: "Batman affronte le Joker dans un duel psychologique intense. Une référence du film de super-héros.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg"
  },
  {
    id: 10,
    title: "La La Land",
    genres: ["Romance", "Drama", "Music"],
    year: 2016,
    director: "Damien Chazelle",
    rating: 4.0,
    description: "Une histoire d’amour entre jazz et rêve hollywoodien, envoûtante et mélancolique.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/5KIj6aioW1UtUT1IV0qqW5iZbNH.jpg"
  },
  {
    id: 11,
    title: "Whiplash",
    genres: ["Drama", "Music"],
    year: 2014,
    director: "Damien Chazelle",
    rating: 3.5,
    description: "Un jeune batteur pousse ses limites face à un professeur tyrannique. Une tension musicale extrême.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/3XriEpTdnplQRzyphAC0cu3emns.jpg"
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    genres: ["Action", "Sci-Fi"],
    year: 2019,
    director: "Anthony Russo",
    rating: 3.4,
    description: "Le final épique de la saga Marvel, où les héros s’unissent pour inverser le destin de l’univers.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/wF7jv3x51hXgkl7t5KHePuRjXc8.jpg"
  },
  {
    id: 13,
    title: "Her",
    genres: ["Sci-Fi", "Romance", "Drama"],
    year: 2013,
    director: "Spike Jonze",
    rating: 3.0,
    description: "Un homme tombe amoureux d’une intelligence artificielle — une réflexion douce-amère sur l’amour moderne.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/nkWXW5blXGmOEoDejRgy83sSb6T.jpg"
  },
  {
    id: 14,
    title: "The Social Network",
    genres: ["Drama"],
    year: 2010,
    director: "David Fincher",
    rating: 3.7,
    description: "La genèse de Facebook et le portrait d’un génie aussi solitaire que controversé.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/cvUfwhoAReL4e5eegFCHM73rIda.jpg"
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    year: 1994,
    director: "Frank Darabont",
    rating: 4.3,
    description: "L’espoir au cœur des ténèbres d’une prison — une ode à la résilience humaine.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/t30GjttOdb5At1sYy8b3TOwFgWV.jpg"
  },
  {
    id: 16,
    title: "The Lion King",
    genres: ["Animation", "Drama"],
    year: 1994,
    director: "Roger Allers",
    rating: 4.5,
    description: "L’héritage d’un lion face à son destin. Un conte animé intemporel sur la famille et la responsabilité.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/n6UChiAOSTHGih2FBactLjA4Cdt.jpg"
  },
  {
    id: 17,
    title: "Spirited Away",
    genres: ["Animation", "Fantasy"],
    year: 2001,
    director: "Hayao Miyazaki",
    rating: 4.6,
    description: "Une jeune fille traverse un monde magique peuplé d’esprits. Un chef-d’œuvre de l’animation japonaise.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/12TAqK0AUgdcYE9ZYZ9r7ASbH5Q.jpg"
  },
  {
    id: 18,
    title: "The Silence of the Lambs",
    genres: ["Thriller", "Crime"],
    year: 1991,
    director: "Jonathan Demme",
    rating: 4.6,
    description: "Une enquêtrice fait appel à un tueur pour traquer un autre monstre. Un thriller culte et glaçant.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/sSQDxwm4r28YpJSQVyVOtpYVs0E.jpg"
  },
  {
    id: 19,
    title: "Get Out",
    genres: ["Horror", "Thriller"],
    year: 2017,
    director: "Jordan Peele",
    rating: 3.7,
    description: "Un week-end en famille qui vire au cauchemar — une critique sociale déguisée en film d’horreur.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/8WzjAhgc4HvpN3Y6LLCc6AbpIhF.jpg"
  },
  {
    id: 20,
    title: "Gladiator",
    genres: ["Action", "Drama"],
    year: 2000,
    director: "Ridley Scott",
    rating: 4.5,
    description: "Un général romain déchu devient gladiateur et défie l’empereur pour sa vengeance et son honneur.",
    posterUrl: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/3fDI4D5rWefyUs7kLcvyafwBEmZ.jpg"
  }
]
