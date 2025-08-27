import ComicsList from "./ComicsList";

const Main = ({ comics }) => {
  return (
    <div className="main bg-black">
      <div>
        <img className="jumbo" src="./img/jumbotron.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-100">
            <ComicsList comics={comics} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Main;