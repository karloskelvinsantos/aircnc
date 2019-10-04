import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../src/Login";
import List from "../src/List";
import Book from "../src/Book";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book
  })
);

export default Routes;
