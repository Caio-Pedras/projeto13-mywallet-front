import React from "react";
import { UserContext } from "./userContext.js";
import { useState } from "react";
export default function UserContextProvider(props) {
  const URL = "https://my-wallet-t6.herokuapp.com";
  const [token, setToken] = useState();
  return (
    <UserContext.Provider value={{ URL, token, setToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
