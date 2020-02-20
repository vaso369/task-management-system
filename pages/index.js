import React, { useState } from "react";

import Background from "../components/Background/Background";
import Login from "../components/Login/Login";
import MessageAuth from "../components/MessageAuth/MessageAuth";
import Logo from "../components/Logo/Logo";
import Head from "next/head";

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <Background />
        <Login />
        <Logo />
        <MessageAuth />
      </div>
      <div
        id="dokumentacija"
        style={{
          width: "20%",
          position: "absolute",
          bottom: "2%",
          right: "12%",
          color: "white"
        }}
      >
        <a href="https://api-task-management.000webhostapp.com/backend/Documentacija.pdf">
          Documentation
        </a>
      </div>
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        ,
        #dokumentacija {
          width: 30%;
          position: absolute;
          bottom: 3%;
          right: 25%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Index;
