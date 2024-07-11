import Header from "@/custom/components/header/header";
import styles from "@/custom/pages/dashboard/dashboard.module.scss";
import MobilePage from "@/custom/components/mobilePage/mobilePage";
import ContentPage from "@/custom/components/contentPage/contentPage";
import Navbar from "@/common/components/layout/navbar/navbar";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <MobilePage />
        <ContentPage />
      </div>
    </div>
  );
}
