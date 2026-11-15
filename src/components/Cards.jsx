
import './Cards.css';

function Cards() {
  return (
    <div className="container mt-5">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
              className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">
                Learn creative web designing.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"
              className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">
                Create amazing websites.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
              className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Marketing</h5>
              <p className="card-text">
                Grow your online business.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cards;