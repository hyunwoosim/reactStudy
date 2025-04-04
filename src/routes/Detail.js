import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState(null);
  const navigate = useNavigate();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setDetailMovie(json.data.movie);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={detailMovie.medium_cover_image} />
          <h1>id: {detailMovie.id}</h1>
          <h1>제목: {detailMovie.title}</h1>
          <p>언어: {detailMovie.language}</p>
          <p>장르: {detailMovie.genres.join(", ")}</p>
          <p>좋아요: {detailMovie.like_count}</p>
          <p>평점:{detailMovie.rating}</p>
          <p>시간: {detailMovie.runtime}</p>
        </div>
      )}

      <button onClick={() => navigate(process.env.PUBLIC_URL + "/")}>
        뒤로가기
      </button>
    </div>
  );
}
export default Detail;
