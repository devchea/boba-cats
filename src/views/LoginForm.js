import React from "react";
import {
  tether,
  Container,
  Heading,
  TextInput,
  PasswordInput,
  Button,
  HelperText,
  Area,
  Section,
} from "@triframe/designer";

const styles = {
  loginPage: {
    alignItems: "center",
    marginTop: "100px",
    border: "solid",
    borderColor: "#5c20d4",
    borderRadius: "10px",
    width: "500px",
  },
  title: {
    paddingTop: "30px",
  },
  featureImage: {
    width: "170px",
    height: "170px",
    padding: "5px",
  },
};

export const LoginForm = tether(function* ({ Api }) {
  const { User } = Api;

  const form = yield {
    username: "",
    password: "",
    errorMessage: null,
  };

  let featureImage =
    "https://media0.giphy.com/media/TFUSzloIYghoLfhsp7/giphy.gif?cid=ecf05e477e77d05b637d7922071387045d673be724752c31&rid=giphy.gif";

  return (
    <Area inline alignX="center">
      <Container style={styles.loginPage}>
        <Heading>LOGIN</Heading>
        <img style={styles.featureImage} src={`${featureImage}`} />
        <TextInput
          label="Username"
          value={form.username}
          onChange={(value) => (form.username = value)}
        />
        <PasswordInput
          label="Password"
          value={form.password}
          onChange={(value) => (form.password = value)}
        />
        <Button
          onPress={async () => {
            try {
              await User.login(form.username, form.password);
            } catch (error) {
              form.errorMessage = error.message;
            }
          }}
        >
          Login
        </Button>
        <HelperText type="error" visible={form.errorMessage !== null}>
          {form.errorMessage}
        </HelperText>
      </Container>
    </Area>
  );
});
