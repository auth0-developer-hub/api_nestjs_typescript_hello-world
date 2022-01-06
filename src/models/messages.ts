export interface Message {
  readonly metadata: {
    readonly api: string;
    readonly branch: string;
  };
  readonly text: string;
}

export interface ErrorMessage {
  readonly message: string;
}
