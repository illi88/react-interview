const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
];

export const movies$ = ({ categories = [] }) => {
  const filtredMovies = movies.filter(
    (movie) => categories.length === 0 || categories.includes(movie.category)
  );

  return new Promise((resolve, reject) =>
    setTimeout(resolve, 100, filtredMovies)
  );
};

export const deleteMovie = (id, selectedCategories) => {
  const filtredMovies = movies.filter(
    (movie) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(movie.category)
  );
  const index = filtredMovies.findIndex((e) => e.id === id);
  if (index !== -1) {
    filtredMovies.splice(index, 1);
    return new Promise((resolve, reject) =>
      setTimeout(resolve, 100, filtredMovies)
    );
  }
};

export const categories = () => {
  const categories = Array.from(new Set(movies.map((e) => e.category))) || [];
  return new Promise((resolve, reject) => setTimeout(resolve, 100, categories));
};
