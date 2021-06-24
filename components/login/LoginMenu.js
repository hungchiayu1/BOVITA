// Login Menu on the right side of the screen

import { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import USERS from "../../public/USERS";
import classes from "./LoginMenu.module.css";

//  Contains 2 components
import InputBox from "./InputBox";
import Submit from "./Submit";

function LoginMenu() {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    currentUser: {},
    isValid: undefined,
    isCorrect: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
    isCorrect: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  function checkEmail(input) {
    const user = USERS.find((user) => {
      return user.name === input;
    });

    return user;
  }

  function checkPassword(input) {
    if (emailState.isCorrect === undefined) {
      return false;
    } else if (emailState.currentUser?.password !== Number(input)) {
      return false;
    }
    return true;
  }

  function emailReducer(state, action) {
    if (action.type === "USER_INPUT") {
      return {
        value: action.val,
        currentUser: state.currentUser,
        isValid: action.val.trim().includes(""),
        isCorrect: state.isCorrect,
      };
    }
    if (action.type === "FORM_SUBMIT") {
      return {
        value: state.value,
        currentUser: checkEmail(state.value),
        isValid: state.isValid,
        isCorrect: (() => {
          const user = checkEmail(state.value);
          return user !== undefined;
        })(),
      };
    }

    return { value: "", isValid: false, isCorrect: false };
  }

  function passwordReducer(state, action) {
    if (action.type === "USER_INPUT") {
      return {
        value: action.val,
        isValid: action.val.trim().length > 3,
        isCorrect: state.isCorrect,
      };
    }
    if (action.type === "FORM_SUBMIT") {
      return {
        value: state.value,
        isValid: state.isValid,
        isCorrect: checkPassword(state.value),
      };
    }
    return { value: "", isValid: false, isCorrect: false };
  }

  // Handles routing when Log In button is pressed
  // Inputs: e (event) & path (route to redirect to upon click)
  useEffect(() => {
    const handler = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [emailState, passwordState]);

  const router = useRouter();

  const handleSubmit = (e, path) => {
    e.preventDefault();
    dispatchEmail({ type: "FORM_SUBMIT" });
    dispatchPassword({ type: "FORM_SUBMIT" });
    if (emailState.isCorrect && passwordState.isCorrect) {
      router.push(path);
    }
  };

  function handleKeyPress(e, path) {
    if (e.key === "Enter") {
      dispatchEmail({ type: "FORM_SUBMIT" });
      dispatchPassword({ type: "FORM_SUBMIT" });
      if (emailState.isCorrect && passwordState.isCorrect) {
        router.push(path);
      }
    }
  }

  return (
    <div className={classes.box}>
      <div className={classes.logo}>
        <Image src="/images/Logo2.svg" alt="Logo" width={94} height={30} />
      </div>
      <div className={classes.input}>
        <InputBox
          setEmail={dispatchEmail}
          setPassword={dispatchPassword}
          wrongEmail={emailState.isCorrect}
          wrongPassword={passwordState.isCorrect}
          handleKeyPress={handleKeyPress}
        />
      </div>
      <div className={classes.submitButton}>
        <Submit handleSubmit={handleSubmit} formIsValid={formIsValid} />
      </div>
    </div>
  );
}

export default LoginMenu;
