import '@/styles/globals.css'
import { Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}
