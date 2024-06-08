import './discountBanner.css'; // Import CSS file for styling

function DiscountBanner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="left-side">
          <img src="images/1.jpeg" alt="Banner Image" />
        </div>
        <div className="right-side">
          <h2 className="heading">Get to know us</h2>
          <h6 className="heading">Make you trip memorable</h6>
          <p className="paragraph">Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="button">Button</button>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
