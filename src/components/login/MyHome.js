import React, { Component } from "react";
import Login from "./Login.jsx";
import SignUp from "../signup/SignUp.jsx";
import Navbar from "../Navbar/Navbar.js";
import Contact from "../Contact/Contact.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Add from "../Add/Add.js";
import Tours from "../Tours/Tours.js";
import Edit from "../Edit/Edit.js";
import ViewTours from "../ViewTours//ViewTours.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage.js";
import PrivateRoute from "./PrivateRoutes.jsx";
export default class MyHome extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/home" replace />}
            />
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/add" exact element={<Add />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/edit" exact element={<Edit />} />
            <Route path="/view" exact element={<ViewTours />} />
            {/* Use PrivateRoute directly inside element prop for /tours */}
            <Route path="/tours" element={<PrivateRoute />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

//Authentication of Login
export const fakeAuth = {
  isAuthenticated: false,

  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <div className={"row justify-content-center  p-2"}>
//       {/* <label className={"text-black mr-5"}>You are now logged in...</label> */}

//       {/* <button
//         className={"btn btn-danger"}
//         onClick={() => {
//           fakeAuth.signOut(() => history.push("/home"));
//         }}
//       >
//         <i className="fa fa-send"></i>&nbsp; Sign out
//       </button> */}
//     </div>
//   ) : (
//     <div>
//       <p>You are not logged in.</p>
//       <button type={"button"} onClick={LoginPage()}>
//         Log in
//       </button>
//     </div>
//   );
// }

// function PrivateRoute({ component: Comp, loggedIn, path, ...rest }) {
//   return (
//     <Route
//       path={path}
//       {...rest}
//       render={(props) => {
//         return loggedIn ? <Comp {...props} /> : <Navigate to="/login" />;
//       }}
//     />
//   );
// }

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { from } = searchParams.get("from") || "/tours";

  //here login is a callback function
  let login = () => {
    fakeAuth.authenticate(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <Login loginFunc={login} />
    </div>
  );
}
