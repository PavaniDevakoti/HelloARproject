import { Component } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { RiDeleteBin6Line } from "react-icons/ri";
import "./index.css";

const dummyLastSignedIn = ["Within 1 hour", "2 days ago", "2 hours ago"];

class UsersList extends Component {
  state = {
    usersList: [],
    allUsersList: [],
    userName: "",
    userRole: "Admin",
    lastSigned: dummyLastSignedIn[0],
  };

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeUserRole = (event) => {
    this.setState({ userRole: event.target.value });
  };

  onSubmitUser = (event) => {
    event.preventDefault();

    const {
      usersList,
      userName,
      userRole,
      allUsersList,
      lastSigned,
    } = this.state;

    const userDetails = {
      id: usersList.length,
      userName,
      userRole,
      lastSigned,
    };

    this.setState((prevState) => ({
      usersList: [...prevState.usersList, userDetails],
      allUsersList: [...prevState.allUsersList, userDetails],
      userName: "",
      userRole: "Admin",
      lastSigned: dummyLastSignedIn[Math.floor(Math.random() * 3.9)],
      popup: !prevState.popup,
    }));

    localStorage.setItem(
      "allUsersList",
      JSON.stringify([...allUsersList, userDetails])
    );
  };

  onClickingDeleteIcon = (id) => {
    const { usersList } = this.state;
    const filteredList = usersList.filter((each) => each.id !== id);
    this.setState({ usersList: filteredList });
  };

  render() {
    const { usersList, userName, userRole } = this.state;

    return (
      <div className="users-list-container">
        <div className="popup-container">
          <Popup
            className="popup-card"
            modal
            trigger={
              <button className="add-user-button" type="button">
                ADD USER
              </button>
            }
          >
            {(close) => (
              <div className="addUser-main-container">
                <div className="addUser-card">
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.B9BMpylPGWzt45pD1cILegHaHa&pid=Api&P=0"
                    alt="add-user"
                    className="addUserUrl"
                  />
                  <p className="addUser-para">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </div>
                <form
                  className="user-details-container"
                  onSubmit={this.onSubmitUser}
                >
                  <h1>User Information</h1>
                  <label htmlFor="user" className="user-label">
                    Email id of User
                  </label>
                  <input
                    className="userName-input"
                    value={userName}
                    id="user"
                    type="text"
                    onChange={this.onChangeUserName}
                  />
                  <label htmlFor="role" className="user-label">
                    Role
                  </label>
                  <select
                    id="role"
                    onChange={this.onChangeUserRole}
                    value={userRole}
                    className="userName-input"
                  >
                    <option value="Admin" defaultValue>
                      Admin
                    </option>
                    <option value="Sales">Sales</option>
                    <option value="Owner">Owner</option>
                    <option value="Manager">Manager</option>
                  </select>

                  <div>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="add-btn">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Popup>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Last Signed In</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((each) => (
              <tr key={each.id}>
                <td>{each.id + 1}</td>
                <td>{each.userName}</td>
                <td>{each.lastSigned}</td>
                <td>{each.userRole}</td>
                <td>
                  <button
                    className="delete-icon"
                    onClick={() => this.onClickingDeleteIcon(each.id)}
                  >
                    <RiDeleteBin6Line className="icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
