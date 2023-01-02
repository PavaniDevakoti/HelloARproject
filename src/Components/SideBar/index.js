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
        <ul>
          <Link to="/products">
            <li className="link-item" onClick={() => this.onClickingLink(1)}>
              <button
                type="button"
                className={activeTab === 1 ? "settings-btn" : "link-button"}
              >
                Products
              </button>
            </li>
          </Link>

          <Link to="/scripts">
            <li className="link-item" onClick={() => this.onClickingLink(2)}>
              <button
                type="button"
                className={activeTab === 2 ? "settings-btn" : "link-button"}
              >
                Demo Scripts
              </button>
            </li>
          </Link>

          <Link to="/customers">
            <li className="link-item" onClick={() => this.onClickingLink(3)}>
              <button
                type="button"
                className={activeTab === 3 ? "settings-btn" : "link-button"}
              >
                Customers
              </button>
            </li>
          </Link>

          <Link to="/salesTeam">
            <li className="link-item" onClick={() => this.onClickingLink(4)}>
              <button
                type="button"
                className={activeTab === 4 ? "settings-btn" : "link-button"}
              >
                Sales Team
              </button>
            </li>
          </Link>

          <Link to="/demos">
            <li className="link-item" onClick={() => this.onClickingLink(5)}>
              <button
                type="button"
                className={activeTab === 5 ? "settings-btn" : "link-button"}
              >
                Demos
              </button>
            </li>
          </Link>

          <Link to="/settings">
            <li className="link-item" onClick={() => this.onClickingLink(6)}>
              <button
                type="button"
                className={activeTab === 6 ? "settings-btn" : "link-button"}
              >
                Settings
              </button>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default SideBar;
