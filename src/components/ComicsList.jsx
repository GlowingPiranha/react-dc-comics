// ComicsList.jsx
import ComicCard from "./ComicCard";

function ComicsList({ comics }) {
  return (
    <div className="container">
      <div className="row">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  )
}

export default ComicsList;
