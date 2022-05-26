import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div>
      <div className="row-md-2">
        <div>
      <Menu/>
        </div>
        <div>
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
