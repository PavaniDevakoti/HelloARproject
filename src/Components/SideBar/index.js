import { Link } from "react-router-dom";
import { Component } from "react";
import "./index.css";

class SideBar extends Component {
  state = { activeTab: "" };

  onClickingLink = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="sidebar-container">
        <Link to="/products">
          <button
            type="button"
            onClick={() => this.onClickingLink(1)}
            className={activeTab === 1 ? "settings-btn" : "link-button"}
          >
            Products
          </button>
        </Link>

        <Link to="/scripts">
          <button
            type="button"
            onClick={() => this.onClickingLink(2)}
            className={activeTab === 2 ? "settings-btn" : "link-button"}
          >
            Demo Scripts
          </button>
        </Link>

        <Link to="/customers">
          <button
            type="button"
            onClick={() => this.onClickingLink(3)}
            className={activeTab === 3 ? "settings-btn" : "link-button"}
          >
            Customers
          </button>
        </Link>

        <Link to="/salesTeam">
          <button
            type="button"
            onClick={() => this.onClickingLink(4)}
            className={activeTab === 4 ? "settings-btn" : "link-button"}
          >
            Sales Team
          </button>
        </Link>

        <Link to="/demos">
          <button
            type="button"
            onClick={() => this.onClickingLink(5)}
            className={activeTab === 5 ? "settings-btn" : "link-button"}
          >
            Demos
          </button>
        </Link>

        <Link to="/settings">
          <button
            type="button"
            onClick={() => this.onClickingLink(6)}
            className={activeTab === 6 ? "settings-btn" : "link-button"}
          >
            Settings
          </button>
        </Link>
      </div>
    );
  }
}

export default SideBar;
