// Displays the Create Account display

import { useReducer, useEffect } from "react";

import classes from "./CreateAccountDisplay.module.css";

// Consists of 3 components
import Text from "./Text";
import RegisterBox from "./RegisterBox";
import SignUp from "./SignUp";

const template = {
  firstName: "",
  firstNameValid: null,
  lastName: "",
  lastNameValid: null,
  email: "",
  emailValid: null,
  password: "",
  passwordValid: null,
  confirmPassword: "",
  confirmPasswordValid: null,
  formValid: null,
};

function CreateAccountDisplay() {
  function formReducer(state, action) {
    if (action.type === "FIRST_NAME") {
      return {
        ...state,
        firstName: action.val,
        firstNameValid: action.val.length > 0,
      };
    }
    if (action.type === "LAST_NAME") {
      return {
        ...state,
        lastName: action.val,
        lastNameValid: action.val.length > 0,
      };
    }
    if (action.type === "EMAIL") {
      return {
        ...state,
        email: action.val,
        emailValid: action.val.includes("@"),
      };
    }
    if (action.type === "PASSWORD") {
      return {
        ...state,
        password: action.val,
        passwordValid: action.val.length > 4,
      };
    }
    if (action.type === "CONFIRM_PASSWORD") {
      return {
        ...state,
        confirmPassword: action.val,
        confirmPasswordValid: state.password === action.val,
      };
    }
  }
  const [formState, dispatchForm] = useReducer(formReducer, template);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello");
      console.log(formState);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(timer);
    };
  }, [formState]);

  return (
    <div className={classes.box}>
      <div className={classes.text}>
        <Text />
      </div>
      <div className={classes.register}>
        <RegisterBox dispatchForm={dispatchForm} formState={formState} />
      </div>
      <div className={classes.buttons}>
        <SignUp />
      </div>
    </div>
  );
}

export default CreateAccountDisplay;
