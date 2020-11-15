import React, { useState } from "react";

const PostMovies = () => {
  const [movie, setMovie] = useState({
    title: "",
    poster: "",
    comment: "",
  });

  const addMovie = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies";
    const config = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    };
    fetch(url, config)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert(data.error)
        }
        else {
            alert(`Movie : ${movie.title} has been successfuly added !`)
        }
    })
    .catch(e =>{
        console.error(e);
        alert('There was an error when adding the movies')
    })
  };

  return (
    <div>
      <h1>Post your favorites movies </h1>
      <form onSubmit={submit}>
        <label>Movie Title </label>
        <input
          type="text"
          value={movie.name}
          onChange={addMovie}
          name="title"
        />
        <label>Movie Poster : </label>
        <input
          type="text"
          value={movie.poster}
          onChange={addMovie}
          name="poster"
        />
        <label> Comment : </label>
        <input
          type="text"
          value={movie.comment}
          onChange={addMovie}
          name="comment"
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default PostMovies;
