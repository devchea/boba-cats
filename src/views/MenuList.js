import React from "react";
import {
  tether,
  Title,
  List,
  Avatar,
  Area,
  Divider,
  Container,
} from "@triframe/designer";

const styles = {
  menuContainer: {
    display: "flex",
  },
};

export const MenuList = tether(function* ({ Api }) {
  const { Drink } = Api;

  const drinks = yield Drink.list();

  return (
    <Container style={styles.menuContainer}>
      <Title>Menu</Title>
      <Divider />
      <Area style={styles.menuContainer}>
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
      </Area>
    </Container>
  );
});
