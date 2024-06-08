
import { useState } from "react";
import Modal from "react-modal";
import Header from "../../Components/Header/header";
import data from "../../Assets/data/data";
import Footer from "../../Components/Footer/footer";


Modal.setAppElement("#root");

function Destination() {
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
      <Header / >

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

export default Destination;
