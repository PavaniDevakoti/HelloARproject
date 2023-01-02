import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="ar-logo-card">
      <img
        src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/6596401/bf521a30.png"
        alt="ar-logo"
        className="ar-logo"
      />
      <p className="ar-heading">MY APPLICATION</p>
    </div>
    <div className="avatar-container">
      <img
        className="avatar-img"
        src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
        alt="avatar"
      />
      <p className="avatar-name">Esther Howard</p>
    </div>
  </div>
);

export default Header;
