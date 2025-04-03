import PropTypes from "prop-types";

function Movie({ coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>{title}</h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
