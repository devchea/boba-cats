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
  button: {
    color: "#23ebdd",
  },
  title: {
    textTransform: "capitalize",
  },
};

export const Cart = tether(function* ({
  props: { drinks, total, deleteFromCart, currentUser, emptyCart },
}) {
  const modal = yield {
    isOpen: false,
  };
  const canBuy = total <= currentUser.wallet;

  const purchase = () => {
    currentUser.wallet -= total;
  };

  const buyDrinks = () => {
    modal.isOpen = true;
    if (canBuy && drinks.length > 0) {
      purchase();
      emptyCart();
    }
    setTimeout(() => {
      modal.isOpen = false;
    }, 3000);
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const name = capitalize(currentUser.username);

  const featureImage =
    "https://media3.giphy.com/media/MFZyuyHxTnzo0J3fXT/giphy.gif?cid=ecf05e47e181ea14a0a0d15d66447d1539191a146d926b11&rid=giphy.gif";

  const sadImage = "https://media.giphy.com/media/4QFd96yuoBJLLW5bcI/giphy.gif";

  return (
    <Container>
      <Modal visible={modal.isOpen}>
        <Area alignX="center" style={styles.modal}>
          {canBuy ? (
            <Section>
              <img style={styles.featureImage} src={`${featureImage}`} />
              <Heading>❤ Enjoy your boba! ❤</Heading>
            </Section>
          ) : (
            <Section>
              <img style={styles.featureImage} src={`${sadImage}`} />
              <Heading>You need to work more!</Heading>
            </Section>
          )}
        </Area>
      </Modal>
      <Area style={styles.cartContainer}>
        <Title>{name}'s Cart</Title>
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
        <Button onClick={() => buyDrinks()} color="#23ebdd">
          Get Yo Boba!
        </Button>
      </Area>
    </Container>
  );
});
