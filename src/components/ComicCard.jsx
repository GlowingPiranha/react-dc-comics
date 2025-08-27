function ComicCard({ comic }) {
  const { thumb, title } = comic;

  return (
    <div className="col-16">

      <div className="comic-card">
        <img src={thumb} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ComicCard;