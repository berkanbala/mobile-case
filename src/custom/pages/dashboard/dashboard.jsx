"use client";
import Header from "@/common/components/layout/header/header";
import styles from "@/custom/pages/dashboard/dashboard.module.scss";
import MobilePage from "@/common/components/layout/mobilePage/mobilePage";
import ContentPage from "@/common/components/layout/contentPage/contentPage";
import Navbar from "@/common/components/layout/navbar/navbar";
import { useState } from "react";

export default function Dashboard() {
  const [page, pages] = useState("");

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <MobilePage />
        <ContentPage />
      </div>
      <div className={styles.bambi}></div>
    </div>
  );
}
