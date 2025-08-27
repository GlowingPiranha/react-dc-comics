import ComicsList from "./ComicsList";

const Main = () => {
  return (
    <div className="main  bg-black">

      <div>
        <img className="jumbo" src="./public/img/jumbotron.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-100">
            <ComicsList />
          </div>
        </div>
      </div>
    </div>

  )


};

export default Main;