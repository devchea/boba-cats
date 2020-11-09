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
};

export const Cart = tether(function* ({
  Api,
  props: { drinks, total, deleteFromCart, currentUser },
}) {
  const { Order, DrinkOrder } = Api;
  const modal = yield {
    isOpen: false,
  };
  const canBuy = total <= currentUser.wallet;

  const purchase = () => {
    async function association() {
      try {
        let newOrder = await Order.create({
          total: total,
          user: currentUser.id,
        });
        
        for (let drink of drinks) {
          await DrinkOrder.create({
            orderId: newOrder.id,
            drinkId: drink.id,
          });
        }

        console.log({ newOrder });
      } catch (error) {
        console.log(error);
      }
    }
    association();
    currentUser.wallet -= total;
  };

  const buyDrinks = () => {
    modal.isOpen = true;
    if (canBuy) purchase();
    setTimeout(() => {
      modal.isOpen = false;
    }, 3000);
  };

  const featureImage =
    "https://media3.giphy.com/media/MFZyuyHxTnzo0J3fXT/giphy.gif?cid=ecf05e47e181ea14a0a0d15d66447d1539191a146d926b11&rid=giphy.gif";
  const sadImage = "https://media.giphy.com/media/4QFd96yuoBJLLW5bcI/giphy.gif";
  return (
    <Container>
      <Modal visible={modal.isOpen}>
        <Area alignX="center" style={styles.modal}>
          {canBuy === false ? (
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
