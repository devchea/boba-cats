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
  Section,
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

export const Cart = tether(function* ({ Api, props: { state, currentUser } }) {
  const modal = yield {
    isOpen: false,
  };
  const canBuy = state.total <= currentUser.wallet;

  const purchase = ()=>{
    currentUser.wallet -= state.total
  }

  const buyDrinks = () => {
    modal.isOpen = true;
    if (canBuy) {
     purchase();
    } else {
      setTimeout(() => {
        modal.isOpen = false;
      }, 3000);
    }
  };

  const featureImage =
    "https://media3.giphy.com/media/MFZyuyHxTnzo0J3fXT/giphy.gif?cid=ecf05e47e181ea14a0a0d15d66447d1539191a146d926b11&rid=giphy.gif";
  const sadImage = "https://media.giphy.com/media/4QFd96yuoBJLLW5bcI/giphy.gif";
  return (
    <Container>
      <Modal visible={modal.isOpen}>
        <Area alignX="center" style={styles.modal}>
          {canBuy ? (
            <Section>
              <img style={styles.featureImage} src={`${sadImage}`} />
              <Heading>You need to work more!</Heading>
            </Section>
          ) : (
            <Section>
              <img style={styles.featureImage} src={`${featureImage}`} />
              <Heading>❤ Enjoy your boba! ❤</Heading>
            </Section>
          )}
        </Area>
      </Modal>
      <Area style={styles.cartContainer}>
        <Title>{currentUser.username}'s Cart</Title>
        <Divider />
      </Area>
      <Area style={styles.totalContainer}>
        <Divider />
        <Heading style={styles.totalText}>Total: $</Heading>
        <Button onClick={() => buyDrinks()}>Get Yo Boba!</Button>
      </Area>
    </Container>
  );
});
