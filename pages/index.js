/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../styles/Home.module.scss";
export default function Home() {
    const [details, setDetails] = useState({
        name: "FELICIA LEIRE",
        number: "9591 6489 6389 1012",
        expMM: "09",
        expYY: "00",
        cvc: "000",
    });
    return (
        <div className={styles.container}>
            <img src="bg-main-desktop.png" alt="" />
            <img src="bg-card-front.png" className={styles.cardFront} alt="" width="500px" height="275px" />
            <img src="card-logo.svg" className={styles.cardLogo} alt="" width="90px" height="50px"/>
            <img src="bg-card-back.png" className={styles.cardBack} alt="" width="500px" height="275px" />
            <div className={styles.cardData}>
              <h3>{details.number}</h3>
              <div>
                <h3>{details.name}</h3>
                <h3>{details.expMM}/{details.expYY}</h3>
              </div>
            </div>
            <div className={styles.cardCvc}>
              <h3>{details.cvc}</h3>
            </div>
            <div className={styles.card}>
                <h3>CARDHOLDER NAME</h3>
                <input type="text" className={styles.input} placeholder="e.g. Jane Appleseed" />
                <h3 className={styles.number}>CARD NUMBER</h3>
                <input type="number" className={styles.input} placeholder="e.g. 1234 5678 9123 0000" />
                <p className={styles.errorMsg}>Can't be blank</p>
                <div className={styles.nestedCard}>
                  <div className={styles.expDiv}>
                    <h3>EXP. DATE (MM/YY)</h3>
                    <input type="number" className={styles.input} placeholder="MM" />
                    <input type="number" className={styles.input} placeholder="YY" />
                <p className={styles.errorMsg}>Can't be blank</p>
                  </div>
                  <div className={styles.cvc}>
                    <h3>CVC</h3>
                    <input type="number" className={styles.input} placeholder="e.g. 123" />
                <p className={styles.errorMsg}>Can't be blank</p>
                  </div>
                </div>
                    <button className={styles.btn}> Confirm</button>
            </div>
        </div>
    );
}
