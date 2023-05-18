import '@/styles/globals.css'
import { Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}
