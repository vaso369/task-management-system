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
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Index;
