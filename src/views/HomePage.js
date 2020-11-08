import React from "react";
import {
  tether,
  Container,
  Title,
  Button,
  Divider,
  Area,
} from "@triframe/designer";

const styles = {
  homePage: {
    marginTop: "80px",
    width: "1000px",
    border: "solid",
    borderColor: "#5c20d4",
    borderRadius: "10px",
    overflowY: "hidden",
  },
  featureImage: {
    width: "600px",
    height: "500px",
    padding: "10px",
  },
};

export const HomePage = tether(function* ({ redirect }) {
  let featureImage =
    "https://i.pinimg.com/originals/7a/4c/fd/7a4cfd654c3b99b94e93c7524b57ff7f.jpg";

  return (
    <Area inline alignX="center">
      <Container style={styles.homePage}>
        <Area inline alignX="center">
          <Title>❤ BOBA CATS ❤</Title>
        </Area>
        <Divider />
        <Area inline alignX="center">
          <img style={styles.featureImage} src={`${featureImage}`} />
        </Area>
        <Area inline alignX="center">
          <Button onPress={() => redirect("/login")}>Login</Button>
          <Button onPress={() => redirect("/signup")}>Sign Up</Button>
        </Area>
      </Container>
    </Area>
  );
});
