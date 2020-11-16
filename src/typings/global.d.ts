interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: unknown;
}

declare interface ISystem {
  import<T = unknown>(module: string): Promise<T>;
}

declare let System: ISystem;
