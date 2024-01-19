import React from "react";

const Header = () => {

  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h5>
          <strong className="--color-dark">Welcome, </strong>
          <span className="--color-danger">{'Arjun'}</span>
        </h5>
        <button className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr style={{ color: 'black' }} />
    </div>
  );
};

export default Header;
