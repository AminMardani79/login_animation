export interface LoginFormType {
  username: string;
  password: string;
  animationIndex: number;
  showPassword: boolean;
}

export interface DispatchType {
    type: string,
    payload?: any
}

export enum formStatus {
  DEFAULT = 1,
  INVALID_INPUT,
  INVALID_SUBMIT,
  VISIBLE_PASSWORD,
  SUCCESS_SUBMIT,
}

export enum formActions {
  INPUT_CHANGE = "INPUT_CHANGE",
  FORM_SUBMIT = "FORM_SUBMIT",
  PASSWORD_TOGGLE = "PASSWORD_TOGGLE",
}
