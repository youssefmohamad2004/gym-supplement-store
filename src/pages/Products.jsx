function Products() {

  const products = [
    {
      name: "Whey Protein",
      price: "$50",
      image:
        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
    },

    {
      name: "Creatine",
      price: "$35",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },

    {
      name: "Pre Workout",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
  ];

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        Our Products
      </h1>

      <div className="row">

        {products.map((product, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="card shadow h-100">

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body text-center">

                <h3>{product.name}</h3>

                <p className="fw-bold">
                  {product.price}
                </p>

                <button className="btn btn-dark">
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;