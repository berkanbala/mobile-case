"use client";
import Header from "@/common/components/ui/header/header";
import styles from "@/custom/pages/dashboard/dashboard.module.scss";
import MobilePage from "@/common/components/ui/mobilePage/mobilePage";
import ContentPage from "@/common/components/ui/contentPage/contentPage";
import Navbar from "@/common/components/ui/navbar/navbar";
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
