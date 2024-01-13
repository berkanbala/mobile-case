import React from "react";
import styles from "@/styles/navbar.module.scss";
import TımLogo from "@/common/media/TIM.png";
import Image from "next/image";
import ImageHeader from "@/common/media/image1.png";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image alt="" className={styles.image} src={ImageHeader} />
        <h2>Murat Turan</h2>
        <span>Tedarik Zinciri Yöneticisi</span>
      </div>
      <div className={styles.menuBar}>
        <span>Menu</span>
        <ul>
          <li>Eğitimler</li>
          <li>Analiz</li>
          <li>Raporlar</li>
          <li>Profil</li>
          <li>Time Yaz</li>
        </ul>
      </div>
      <div className={styles.prefence}>
        <span>Tercihler</span>
        <ul>
          <li>Yetkilendirme</li>
          <li>Şifremi Değiştir</li>
          <li>Gizlilik Politikası</li>
        </ul>
        <Image alt="" className={styles.logo} src={TımLogo} />
      </div>
    </div>
  );
}
