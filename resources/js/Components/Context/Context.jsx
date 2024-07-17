import React from "react";

const Context = React.createContext({
  items: [],
  totalAmount: 0,
  additem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});