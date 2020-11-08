import React from "react";
import {
  tether,
  Container,
  Button,
  Area,
  Title,
  Heading,
  Divider,
  Modal,
  List,
  BubbleButton,
  Avatar,
} from "@triframe/designer";

const styles = {
  cartContainer: {
    position: "relative",
  },
  totalContainer: {
    position: "absolute",
    bottom: "50px",
  },
  totalText: {
    paddingBottom: "50px",
  },
  modal: {
    padding: "50px",
  },
  featureImage: {
    width: "200px",
    height: "200px",
  },
};

export const Cart = tether(function* ({
  Api,
  props: { drinks, total, deleteFromCart },
}) {
  const { User } = Api;
  const currentUser = yield User.current();

  const modal = yield {
    isOpen: false,
  };

  const buyDrinks = () => {
    modal.isOpen = true;
    setTimeout(() => {
      modal.isOpen = false;
    }, 2000);
  };

  let featureImage =
    "https://media3.giphy.com/media/MFZyuyHxTnzo0J3fXT/giphy.gif?cid=ecf05e47e181ea14a0a0d15d66447d1539191a146d926b11&rid=giphy.gif";

  return (
    <Container>
      <Modal visible={modal.isOpen}>
        <Area alignX="center" style={styles.modal}>
          <img style={styles.featureImage} src={`${featureImage}`} />
          <Heading>❤ Enjoy your boba! ❤</Heading>
        </Area>
      </Modal>
      <Area style={styles.cartContainer}>
        <Title>{currentUser.username}'s Cart</Title>
        <Divider />
        <Area style={styles.menuContainer}></Area>
        {drinks.map((d, i) => {
          return (
            <Area inline key={i}>
              <BubbleButton
                icon="minus"
                size="xs"
                color="white"
                onClick={() => deleteFromCart(d)}
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
      <Area style={styles.totalContainer}>
        <Divider />
        <Heading style={styles.totalText}>Total: ${total}</Heading>
        <Button onClick={() => buyDrinks()}>Get Yo Boba!</Button>
      </Area>
    </Container>
  );
});
