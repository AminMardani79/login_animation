"use client"
import React, { Dispatch } from "react";
import { DispatchType, LoginFormType, formActions } from "@/app/application.types";
import { HiEye, HiEyeOff } from "react-icons/hi";

function LoginForm({dispatch, state} : {dispatch: Dispatch<DispatchType>, state: LoginFormType}) {
    const {username, password, showPassword} = state;
  return <form className="self-center flex flex-col m-auto justify-center gap-4">
  <div className="w-[200px]">
    <div className="flex justify-between">
      <span className="font-semibold">نام کاربری</span>
      <span className="font-light text-gray-500">Username</span>
    </div>
    <input
      value={username}
      onChange={(e) =>
        dispatch({
          type: formActions.INPUT_CHANGE,
          payload: { name: e.target.name, value: e.target.value },
        })
      }
      name="username"
      type="text"
      className="h-[45px] w-full bg-[#c7c8ca] border border-white pr-2"
    />
  </div>
  <div className="w-[200px]">
    <div className="flex justify-between">
      <span className="font-semibold">رمز عبور</span>
      <span className="font-light text-gray-500">Password</span>
    </div>
    <div className="password-container relative">
      <input
        value={password}
        onChange={(e) =>
          dispatch({
            type: formActions.INPUT_CHANGE,
            payload: { name: e.target.name, value: e.target.value },
          })
        }
        name="password"
        type={showPassword ? "text" : "password"}
        className="h-[45px] w-full bg-[#c7c8ca] border border-white pl-6 pr-2"
      />
      <span
        className="eye-icon absolute left-2 top-4"
        onClick={() =>
          dispatch({
            type: formActions.PASSWORD_TOGGLE,
          })
        }
      >
        {showPassword ? <HiEye /> : <HiEyeOff />}
      </span>
    </div>
  </div>
  <div className="w-[200px]">
    <div className="flex gap-2">
      <input type="checkbox" />
      <span className="font-semibold">مرا به خاطر بسپار</span>
    </div>
  </div>
  <div className="w-[200px]">
    <button
      type="button"
      className="w-full font-semibold h-[45px] rounded-lg bg-[#9DAD20]
     text-white hover:bg-[#525922] transition-all"
      onClick={() =>
        dispatch({
          type: formActions.FORM_SUBMIT,
        })
      }
    >
      ورود
    </button>
  </div>
</form>;
}

export default LoginForm;
