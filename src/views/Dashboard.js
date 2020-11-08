import React from "react";
import {
  tether,
  Container,
  Heading,
  Button,
  List,
  Avatar,
} from "@triframe/designer";

export const Dashboard = tether(function* ({ Api, redirect }) {
  const { Drink } = Api;

  const drinks = yield Drink.list();

  const logout = () => {
    localStorage.clear();
    redirect("/");
  };

  return (
    <Container>
      <Heading>Menu</Heading>
      {drinks.map((d, i) => {
        return (
          <List.Item
            key={i}
            title={d.name}
            description={`$ ${d.price}`}
            left={() => <Avatar.Image source={d.imageUrl} />}
          />
        );
      })}
      <Button onPress={logout}>Logout</Button>
    </Container>
  );
});
