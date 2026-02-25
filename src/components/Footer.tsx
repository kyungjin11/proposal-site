import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top: logo + description */}
        <div className={styles.top}>
          <Image
            className={styles.logo}
            src="/proposals/logo1.png"
            alt="SignalDecode 로고"
            width={180}
            height={48}
          />
          <div className={styles.description}>
            <p>시그널디코드는 변화하는 디지털 패러다임에 가장 빠르게 대응하는 웹 에이전시입니다.</p>
            <p>다양한 개발 스택과 최신 UX/UI 트렌드를 결합하여,</p>
            <p>유입된 고객이 브랜드에 깊이 몰입하고 전환될 수 있는 최상의 디지털 경험을 엔지니어링합니다.</p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom: company info */}
        <div className={styles.info}>
          <div className={styles.infoColumn}>
            <p><strong>상호</strong>  주식회사 시그널디코드  <strong>대표</strong>  손재현</p>
            <p><strong>사업자번호</strong>  397-88-03608</p>
            <p><strong>주소</strong>  서울특별시 마포구 잔다리로 44, 6층(서교동, 센터원빌딩)</p>
          </div>
          <div className={styles.infoColumn}>
            <p><strong>이메일</strong>  signaldecode@signal-decode.com</p>
            <p><strong>업무시간</strong>  10:00 - 19:00  <strong>대표번호</strong>  02-322-7779</p>
            <p><strong>개인정보관리책임자</strong>  김병호</p>
          </div>
        </div>

        <p className={styles.copyright}>COPYRIGHT © 2020 SIGNALDECODE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
