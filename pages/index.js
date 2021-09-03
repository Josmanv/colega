import Head from 'next/head';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import {useContext} from 'react';

export default function Home() {

  const {usuario} = useContext(FirebaseContext);

  return (
    <div>
      <Head>
        <title>Día del Colega 2021</title>
        <meta name="description" content="App para la asistencia del día del Colega 2021" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500&display=swap" rel="stylesheet" />
      </Head>


      {usuario 
        ? <CookieConsent
        onAccept={() => {
            alert("Cuanto te gustará... Pájaro!");
        }}
        enableDeclineButton
        onDecline={() => {
          alert("Que pasa? prefieres LSD???");
        }}
        location="bottom"
        buttonText="Acepto el viaje"
        declineButtonText="Pues va a ser que no!"
        cookieName="Cokeelega"
        style={{ background: "#0f1918" }}
        buttonStyle={{ background: "#b33838", color: "#fff", fontSize: "1em" }}
        expires={150}
        >Esta web no utiliza cookies, <span style={{ fontSize: "1.3em", fontWeight: "500" }}> utiliza magic mushrooms </span> que debes aceptar para continuar... </CookieConsent> 
        : null}
      

      <Layout></Layout>
    </div>
  )
}
