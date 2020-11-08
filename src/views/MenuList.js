import React from "react";
import {
  tether,
  Title,
  List,
  Avatar,
  Area,
  Divider,
  Container,
  BubbleButton,
} from "@triframe/designer";

const styles = {
  menuContainer: {
    display: "flex",
  },
};

export const MenuList = tether(function* ({ Api, props: { addToCart } }) {
  const { User, Drink } = Api;

  let currentUser = yield User.current();
  const drinks = yield Drink.list();

  return (
    <Container style={styles.menuContainer}>
      <Title>Menu</Title>
      <Divider />
      <Area style={styles.menuContainer}>
        {drinks.map((d, i) => {
          return (
            <Area inline key={i}>
              <BubbleButton
                icon="plus"
                size="xs"
                color="white"
                onClick={() => addToCart(d)}
              />
              <List.Item
                title={d.name}
                description={`$ ${d.price}`}
                left={() => <Avatar.Image source={d.imageUrl} />}
              />
            </Area>
          );
        })}
      </Area>
    </Container>
  );
});
