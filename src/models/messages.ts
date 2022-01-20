export interface Message {
  readonly metadata: Metadata;
  readonly text: string;
}

export interface Metadata {
  readonly api: string;
  readonly branch: string;
}

export interface ErrorMessage {
  readonly message: string;
}
