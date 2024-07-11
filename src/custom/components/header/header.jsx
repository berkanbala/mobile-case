import React from "react";
import styles from "@/styles/header.module.scss";
import Image from "next/image";
import Logo from "@/common/assets/media/logo.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Image alt="" className={styles.headerImage} src={Logo} />
        <p>Digital Mentor</p>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Merhaba Murat Bey</h2>
        <p className={styles.p}>
          Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana
          tıklayarak rapora erişim sağlayabiliriniz.
        </p>
      </div>
    </div>
  );
}
