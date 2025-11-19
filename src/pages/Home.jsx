import HeroSection from '../components/home/HeroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import CertificatesSection from '../components/home/CertificatesSection';
import Footer from '../components/common/Footer';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <HighlightsSection />
      <CertificatesSection />
    </div>
  );
}

export default Home;
