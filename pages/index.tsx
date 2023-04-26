import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Dropzone from 'react-dropzone'
import styles from '@/styles/Home.module.css'
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";


export default function Home() {
  const phoneInputRef = useRef<any | null>(null);
  
  useEffect(() => {
    const iti = intlTelInput(phoneInputRef.current, {
      preferredCountries: ["fr", "us", "uk", "ch"],
      initialCountry: "fr",
      separateDialCode: true,
      nationalMode: false,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Test d'integration</title>
        <meta name="site test" content="test app " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
        </div>
        <section className={styles.formulaire}>
          <div className={styles.bar}></div>
          <div className={styles.topform}>
            <p>1/16</p>
            <h2>Vos informations</h2>
          </div>
          <form action="">
            <div className={styles.value}>
              <label htmlFor="firstname">prénom *</label>
              <input type="text" name="Prénom"  id='firstname' placeholder='Donnez votre réponse ici' />
            </div>
            <div className={styles.value}>
              <label htmlFor="name">nom *</label>
              <input type="text" name="Nom"  id='name' placeholder='Donnez votre réponse ici' />
            </div>
            <div className={styles.value}>
              <label htmlFor="adress">adresse complète *</label>
              <input type="text" name="Adresse"  id='adress' placeholder='Donnez votre réponse ici' />
            </div>
            <div className={styles.value}>
              <label htmlFor="birthday">date de naissance *</label>
              <input type="date" name="Date de naissance"  id='birthday' placeholder='__/__/____'/>
            </div>
            <div className={styles.value}>
            <label htmlFor="phone">Numero de Telephone *:</label>
            <input type="tel" name="phone" id="phone" ref={phoneInputRef}/>
            </div>
            <div className={styles.choix}>
              <legend>question à choix multiples *</legend>
              <div>
                <input type="radio" name="choice" id='yes' value="yes"  />
                <label htmlFor="yes">Oui</label>
              </div>
              <div>
                <input type="radio" name="choice" id='no' value="no"  />
                <label htmlFor="no">Non</label>
              </div>
            </div>
            <div className={styles.value}>
              <label htmlFor="email">adresse mail *</label>
              <input type="email" name="Mail" id="email" placeholder='Donnez votre réponse ici'/>
            </div>
            <div className={styles.notif}>
              <label htmlFor="range">Voulez-vous recevoir des notifications par mail ?</label>
              <input type="range" id="range" name="range" min="0" max="1" />
            </div>
            <div className={styles.dragndrop}>
              <label htmlFor="piec">pièce d'identité. *</label>
              <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className={styles.drop}>
                        <img src="/drop.png" alt="drop fichier" />
                        <p>Glissez votre fichier dans cette zone</p>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>

            <div className={styles.btn}>
                <button>Suivant</button>
            </div>
          </form>
        </section>
        <div className={styles.botoom}>
          <p>We inform you that data gathered will b manage by computer only by providers of offres</p>
        </div>
      </main>
    </>
  )
}
