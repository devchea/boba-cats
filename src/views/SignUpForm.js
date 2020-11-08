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
import { Snackbar } from "@triframe/designer/dist/paper";

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

export const SignUpForm = tether(function* ({ Api, redirect }) {
  const { User } = Api;

  const form = yield {
    username: "",
    password: "",
    errorMessage: null,
  };

  let featureImage =
    "https://media0.giphy.com/media/g0sM3ysY4s1atzftDY/source.gif";

  //login message on successful account creation and redirect
  const snackbar = yield {
    visible: false,
    message: "Success! Please log in!"
  }

  const accountSuccess = () => {
    snackbar.visible = true;
    setTimeout(() => {
      redirect("/login")
    }, 2500)
  }

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
              const user = await User.register(form.username, form.password)
              if (user) {
                accountSuccess()
              }
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
        <Snackbar visible={snackbar.visible}>{snackbar.message}</Snackbar>
      </Container>
    </Area>
  );
});
