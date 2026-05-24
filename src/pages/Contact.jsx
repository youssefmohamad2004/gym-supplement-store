function Contact() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Contact Us
      </h1>

      <form className="w-50 mx-auto">

        <input
          type="text"
          placeholder="Your Name"
          className="form-control mb-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="form-control mb-3"
        />

        <textarea
          placeholder="Message"
          className="form-control mb-3"
          rows="5"
        ></textarea>

        <button className="btn btn-dark w-100">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;