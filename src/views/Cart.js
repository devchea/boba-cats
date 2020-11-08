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

export const Cart = tether(function* ({ Api }) {
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
        {/* items in cart here */}
      </Area>
      <Area style={styles.totalContainer}>
        <Divider />
        <Heading style={styles.totalText}>Total: $</Heading>
        <Button onClick={() => buyDrinks()}>Get Yo Boba!</Button>
      </Area>
    </Container>
  );
});
