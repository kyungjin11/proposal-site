import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textArea}>
        <Image
          src="/proposals/logo1.png"
          alt="SignalDecode 로고"
          width={180}
          height={48}
          className={styles.logo}
        />

        <h1 className={styles.heading}>
          <span className={styles.headingLight}>시장의 신호를 읽고(Signal)</span>
          <span className={styles.headingBold}>비즈니스의 성장을 해독(Decode)하다</span>
        </h1>

        <p className={styles.description}>
          시그널디코드는 기술적 한계에 갇히지 않는 마케팅과, 마케팅 전략이 녹아있는 개발을 지향합니다.
          <br />
          우리는 기업이 마주한 복잡한 문제를 디지털 기술로 풀고,
          <br />
          그 결과가 실질적인 매출 성장으로 이어지도록 비즈니스를 설계하는 <strong>DX 에이전시</strong>입니다.
        </p>
      </div>

      <Image
        src="/proposals/3d.png"
        alt="3D 비주얼"
        width={600}
        height={600}
        className={styles.visual}
        priority
      />
    </div>
  );
}
