"use client";
import Header from "@/common/components/ui/header/header";
import styles from "@/custom/pages/dashboard/dashboard.module.scss";
import MobilePage from "@/common/components/ui/mobilePage/mobilePage";
import ContentPage from "@/common/components/ui/contentPage/contentPage";
import Navbar from "@/common/components/ui/navbar/navbar";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <MobilePage />
      </div>
      <div className={styles.bambi}>
        <ContentPage />
      </div>
    </div>
  );
}
