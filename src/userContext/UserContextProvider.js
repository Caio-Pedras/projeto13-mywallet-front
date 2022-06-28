import React from "react";
import { UserContext } from "./userContext.js";
import { useState } from "react";
export default function UserContextProvider(props) {
  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
}
