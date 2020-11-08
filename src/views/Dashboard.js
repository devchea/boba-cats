import React from "react";
import {
  tether,
  Container,
  Button,
  Area,
  Grid,
  Column,
  Heading,
} from "@triframe/designer";
import { MenuList } from "./MenuList";
import { Cart } from "./Cart";

let featureImage =
  "https://i.pinimg.com/originals/ab/ec/dd/abecdd7e037fa1710ebeebe0fecf9c51.jpg";

const styles = {
  dashboardContainer: {
    backgroundImage: `url(${featureImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    backgroundColor: "#f7f7f7",
  },
};

export const Dashboard = tether(function* ({ Api, redirect }) {
  const { User } = Api;
  const currentUser = yield User.current();
  const logout = () => {
    localStorage.clear();
    redirect("/");
  };

  const currentCart = yield {
    drinks: [],
    total: 0,
  };

  const addToCart = (drink) => {
    currentCart.drinks.push(drink);

    const currentTotal = currentCart.drinks.reduce((acc, val) => {
      acc += val.price;
      return acc;
    }, 0);

    currentCart.total = currentTotal;
  };

  const deleteFromCart = (drink) => {
    const duplicateDrinks = currentCart.drinks.filter((c) => c.id === drink.id);
    const updatedCart = currentCart.drinks.filter((c) => c.id !== drink.id);

    if (duplicateDrinks.length > 1) {
      duplicateDrinks.pop();
      currentCart.drinks = [...updatedCart, ...duplicateDrinks];
    } else {
      currentCart.drinks = updatedCart;
    }

    const currentTotal = currentCart.drinks.reduce((acc, val) => {
      acc += val.price;
      return acc;
    }, 0);

    currentCart.total = currentTotal;
  };

  const emptyCart = () => {
    currentCart.drinks = [];
    currentCart.total = 0;
  };

  if (currentUser) {
    return (
      <Container style={styles.dashboardContainer}>
        <Area alignX="right">
          <Heading>Wallet Amount: ${currentUser.wallet}</Heading>
          <Button color="#23ebdd" onPress={logout}>
            Log out
          </Button>
        </Area>
        <Grid>
          <Column lg={6}>
            <MenuList addToCart={(drink) => addToCart(drink)} />
          </Column>
          <Column lg={4}>
            <Cart
              currentUser={currentUser}
              drinks={currentCart.drinks}
              total={currentCart.total}
              deleteFromCart={(drink) => deleteFromCart(drink)}
              emptyCart={emptyCart}
            />
          </Column>
        </Grid>
      </Container>
    );
  } else {
    redirect("/login");
  }
});
