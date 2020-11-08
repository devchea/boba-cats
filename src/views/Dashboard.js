import React from "react";
import {
  tether,
  Container,
  Button,
  Area,
  Grid,
  Column,
} from "@triframe/designer";
import { MenuList } from "./MenuList";
import { Cart } from "./Cart";

export const Dashboard = tether(function* ({ Api, redirect }) {
  const { Drink } = Api;

  const drinks = yield Drink.list();

  const logout = () => {
    localStorage.clear();
    redirect("/");
  };

  return (
    <Container>
      <Area alignX="right">
        <Button onPress={logout}>Log out</Button>
      </Area>
      <Grid>
        <Column lg={6}>
          <MenuList />
        </Column>
        <Column lg={4}>
          <Cart />
        </Column>
      </Grid>
    </Container>
  );
});
