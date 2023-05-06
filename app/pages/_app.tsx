import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "reflect-metadata";
import { store } from "src/redux/store/store";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
