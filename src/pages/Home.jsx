import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div
        className="text-white text-center p-5 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >

        <h1 className="display-3 fw-bold">
          Build Your Dream Body
        </h1>

        <p className="lead mt-3">
          Premium Gym Supplements for Strength & Performance
        </p>

        <Link to="/products" className="btn btn-warning btn-lg mt-3">
          Shop Now
        </Link>

      </div>

      {/* Features */}
      <div className="container mt-5">

        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="card p-4 shadow h-100">
              <h3>Whey Protein</h3>
              <p>Best quality protein supplements.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow h-100">
              <h3>Creatine</h3>
              <p>Boost your strength and energy.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow h-100">
              <h3>Pre Workout</h3>
              <p>Maximum focus during training.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;