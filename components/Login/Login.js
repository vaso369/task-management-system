import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";
import $ from "jquery";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "next/link";
import { useStyles } from "./LoginStyle";
import { url, urlRedirect } from "../../consts/consts";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import NewLink from "../../src/Link";
import Router from "next/router";

const Login = (props) => {
  const classes = useStyles();
  const globalState = useStateGlobal();
  const dispatch = useDispatchState();
  const loginSubmit = () => {
    const username = document.querySelector("#tbUserNameLogin").value;
    const pass = document.querySelector("#tbPassLogin").value;
    console.log(username, pass);
    const loginObj = {
      username,
      pass
    };
    $.ajax({
      url: url + "?page=login",
      method: "POST",
      dataType: "json",
      data: loginObj,
      success: function(data) {
        console.log(data);
        // WHEN JWT IS SET
//         localStorage.setItem("token", data.jwt);
//         dispatch({
//           type: "SET_LOGIN",
//           data: data.user
//         });
//         if (data.user.code === "200") {
//           Router.push("/employee");
//         } else {
//           Router.push("/boss");
//         }
           dispatch({
          type: "SET_LOGIN",
          data: data
        });
        if (data.code === "200") {
          Router.push("/employee");
        } else {
          Router.push("/boss");
        }
      },
      error: function(xhr) {
        console.log(xhr);
        alert("You are not registered!");
      }
    });
  };
  console.log(globalState);
  return (
    <React.Fragment>
      <div id="login" className={classes.login}>
        <h2 className={classes.loginH2}>Login</h2>
        <br></br>
        <div id="divLogin" className={classes.divLogin}>
          <TextField
            id="tbUserNameLogin"
            label="USERNAME"
            className={classes.tbLogin}
            defaultValue=""
            helperText=""
            variant="outlined"
            autoFocus
          />
        </div>

        <TextField
          id="tbPassLogin"
          type="password"
          label="PASSWORD"
          className={classes.tbLogin}
          defaultValue=""
          helperText=""
          variant="outlined"
        />
        <br></br>
        <Button
          id="btnLogin"
          className={classes.btnLogin}
          variant="outlined"
          color="primary"
          onClick={loginSubmit}
        >
          LOGIN&nbsp;<ExitToAppIcon></ExitToAppIcon>
        </Button>
        <br></br>
        <div className="no-account">
          <p>
            Don't have an account? Register{" "}
            <Link href="/register">
              <a>here!</a>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
