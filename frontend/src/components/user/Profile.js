import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />

          <h2 className="mt-5 ml-5">My Profile</h2>
          <hr />
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile">
                <img
                  className="rounded-circle img-fluid"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <Link
                to="/me/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Edit Profile
              </Link>
            </div>

            <div className="col-12 col-md-5">
              <h4>Full Name</h4>
              <p>{user.name}</p>

              <hr />

              <h4>Email Address</h4>
              <p>{user.email}</p>

              <hr />

              <h4>Joined On</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              <hr />

              {user.role !== "admin" && (
                <Link
                  to="/orders/me"
                  className="btn btn-block mt-5"
                  id="btn_myOrders"
                >
                  My Orders
                </Link>
              )}
              <Link
                to="/password/update"
                className="btn btn-block mt-3"
                id="btn_changePassword"
              >
                Change Password
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
