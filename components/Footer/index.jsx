import Img from 'components/base/Img';

import styles from './Footer.module.scss';

import FacebookIcon from 'public/icons/facebook.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentLeft}>
        <div>
          <div className={styles.imageWrapper}>
            <Img layout="fixed" src={WhatsappIcon} width={28} height={28} placeholder="empty" />
          </div>
          <a>0812 7950 3322</a>
        </div>
        <div>
          <div className={styles.image}>
            <Img layout="fixed" src={InstagramIcon} width={28} height={28} placeholder="empty" />
          </div>
          <span>pondokpesantrenalhadi</span>
        </div>
        <div>
          <div className={styles.imageWrapper}>
            <Img layout="fixed" src={FacebookIcon} width={28} height={28} placeholder="empty" />
          </div>
          <span>Ponpes Alhadi</span>
        </div>
      </div>
      <div className={styles.footerContentRight}>
        <h3>Kantor Pondok Pesantren Al-Hadi</h3>
        <p>
          Desa Sungai Langka Kecamatan Gedong Tataan
          <br /> Kabupaten Pesawaran - Lampung
        </p>
        <div>
          <div>Contact Person:</div>
          <a>0812 7950 3322</a>
          <a>0896 2607 2735</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
