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
} from "@triframe/designer";

const styles = {
  signUpPage: {
    alignItems: "center",
    marginTop: "100px",
    border: "solid",
    borderColor: "#5c20d4",
    borderRadius: "10px",
    width: "500px",
  },
  featureImage: {
    width: "150px",
    height: "150px",
    padding: "10px",
  },
};

export const SignUpForm = tether(function* ({ Api }) {
  const { User } = Api;

  const form = yield {
    username: "",
    password: "",
    errorMessage: null,
  };

  let featureImage =
    "https://media0.giphy.com/media/g0sM3ysY4s1atzftDY/source.gif";

  return (
    <Area inline alignX="center">
      <Container style={styles.signUpPage}>
        <Heading>SIGN UP</Heading>
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
              await User.register(form.username, form.password);
            } catch (error) {
              form.errorMessage = error.message;
            }
          }}
        >
          Sign Up
        </Button>
        <HelperText type="error" visible={form.errorMessage !== null}>
          {form.errorMessage}
        </HelperText>
      </Container>
    </Area>
  );
});
