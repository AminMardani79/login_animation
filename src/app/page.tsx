"use client";
import React, { useReducer } from "react";
import {
  DispatchType,
  LoginFormType,
  formActions,
  formStatus,
} from "./application.types";
import LoginForm from "@/components/loginForm";
import LoginAnimation from "@/components/loginAnimation";

const usernameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^[a-zA-Z0-9]+$/;

const initialState = {
  username: "",
  password: "",
  animationIndex: 1,
  showPassword: false,
};

const reducer = (state: LoginFormType, action: DispatchType) => {
  switch (action.type) {
    case formActions.INPUT_CHANGE:
      let animationIndex;
      if (!state.showPassword) {
        if (action.payload.name === "username") {
          animationIndex = !usernameRegex.test(action.payload.value)
            ? formStatus.INVALID_INPUT
            : formStatus.DEFAULT;
        }
        if (action.payload.name === "password") {
          animationIndex = !passwordRegex.test(action.payload.value)
            ? formStatus.INVALID_INPUT
            : formStatus.DEFAULT;
        }
      }
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        animationIndex: animationIndex ? animationIndex : state.animationIndex,
      };
    case formActions.FORM_SUBMIT:
      const testPassword = passwordRegex.test(state.password);
      const testUserName = usernameRegex.test(state.username);
      if (!testUserName || !testPassword) {
        return { ...state, animationIndex: formStatus.INVALID_SUBMIT };
      }
      return { ...state, animationIndex: formStatus.SUCCESS_SUBMIT };
    case formActions.PASSWORD_TOGGLE:
      if (!state.showPassword) {
        return {
          ...state,
          animationIndex: formStatus.VISIBLE_PASSWORD,
          showPassword: !state.showPassword,
        };
      } else {
        const testPassword = passwordRegex.test(state.password);
        const testUserName = usernameRegex.test(state.username);
        if (!testUserName || !testPassword) {
          return {
            ...state,
            animationIndex: formStatus.INVALID_INPUT,
            showPassword: !state.showPassword,
          };
        }
        return {
          ...state,
          animationIndex: formStatus.DEFAULT,
          showPassword: !state.showPassword,
        };
      }

    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="h-screen flex justify-center">
      <div
        className="grid self-center justify-start align-middle bg-[#CCDC3C] grid-cols-[36%_auto]
         sm:w-6/8 sm:h-6/8 md:w-3/4 md:h-3/4 w-full h-screen"
      >
        <LoginForm dispatch={dispatch} state={state} />
        <LoginAnimation animationIndex={state.animationIndex} />
      </div>
    </main>
  );
}
