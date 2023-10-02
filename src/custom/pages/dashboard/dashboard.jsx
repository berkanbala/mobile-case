import Content from "@/common/components/ui/content/content";
import Header from "@/common/components/ui/header/header";
import Navbar from "@/common/components/ui/navbar/navbar";
import React from "react";
import styles from "@/custom/pages/dashboard/dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}
