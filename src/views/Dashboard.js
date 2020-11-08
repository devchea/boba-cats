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

export const Dashboard = tether(function* ({ Api, redirect }) {
  const { User } = Api;
  const [currentUser] = yield User.getUserInfo();

  const logout = () => {
    localStorage.clear();
    redirect("/");
  };

  if (currentUser) {
    return (
      <Container>
        <Area alignX="right">
          <Heading>Wallet Amount: ${currentUser.wallet}</Heading>
          <Button onPress={logout}>Log out</Button>
        </Area>
        <Grid>
          <Column lg={6}>
            <MenuList />
          </Column>
          <Column lg={4}>
            <Cart userInfo={currentUser} />
          </Column>
        </Grid>
      </Container>
    );
  } else {
    redirect("/login");
  }
});
