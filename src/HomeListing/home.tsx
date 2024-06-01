import React, { useState } from "react";
import "./home.css";
import data from "../data/data";
import Footer from "../footer/footer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Home() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // You can add additional logic or API calls as needed
    // For now, let's just close the modal
    setShowForm(false);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand d-lg-none" href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/about"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/services">
                    SERVICES
                  </a>
                </li>
                <a className="navbar-brand d-none d-lg-block" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </a>
                <li className="nav-item">
                  <a className="nav-link active" href="/blog">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 p-4">
        {data.map((item, index) => (
          <div key={index} className="col">
            <div className="card">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt="Card Image"
                style={{
                  maxHeight: '300px'

                }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.stay}</h5>
                <p className="card-text">
                  {item.inclusions.map((inc, i) => (
                    <span key={i}>
                      * {inc}
                      <br />
                    </span>
                  ))}
                </p>
                <p className="card-text">
                  <span className="font-weight-bold"> Hotel: {item.hotel}</span>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Per Person Cost: {item.per_person_cost} *
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Helper Icon */}
      <div className="sticky-icon" onClick={toggleForm}>
        <img src="/images/helper-icon.png" alt="Helper Icon" />
      </div>

      {/* Modal Form */}
      <Modal
        isOpen={showForm}
        onRequestClose={toggleForm}
        contentLabel="Helper Form"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">We are here to help</h5>
          <button className="btn-close" onClick={toggleForm}></button>
        </div>
        <div className="modal-body">
          {/* Your form elements go here */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone number
              </label>
              <input
                type="phoneNumber"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Destination
              </label>
              <input
                type="string"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="destination"
              />
            </div>
            {/* Add more form fields as needed */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Modal>
      <Footer />
    </>
  );
}

export default Home;
