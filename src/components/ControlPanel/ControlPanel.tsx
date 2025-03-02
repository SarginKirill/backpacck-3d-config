import { FC, useContext } from 'react';
import { Config } from '../../utils/Context';
import styles from './ControlPanel.module.css';

export const ControlPanel: FC = () => {
  const {
    bodyColor,
    bodyColorHandle,
    material,
    materialHandle,
    metallColor,
    metallColorHandle,
  } = useContext(Config);

  return (
    <div className={styles.wrapper}>
      <div className={styles.panelWrapper}>
        <h3>Body color</h3>
        <div className={styles.selectorWrapper}>
          <div
            onClick={() => bodyColorHandle('brown')}
            className={`${styles.roundSelector} ${styles.bodyBrown} ${
              bodyColor === 'brown' ? styles.active : ''
            }`}
          ></div>
          <div
            onClick={() => bodyColorHandle('black')}
            className={`${styles.roundSelector} ${styles.bodyBlack} ${
              bodyColor === 'black' ? styles.active : ''
            }`}
          ></div>
          <div
            onClick={() => bodyColorHandle('blue')}
            className={`${styles.roundSelector} ${styles.bodyBlue} ${
              bodyColor === 'blue' ? styles.active : ''
            }`}
          ></div>
        </div>
      </div>

      <div className={styles.panelWrapper}>
        <h3>Metall color</h3>
        <div className={styles.selectorWrapper}>
          <div
            onClick={() => metallColorHandle('silver')}
            className={`${styles.roundSelector} ${styles.metallSilver} ${
              metallColor === 'silver' ? styles.active : ''
            }`}
          ></div>
          <div
            onClick={() => metallColorHandle('gold')}
            className={`${styles.roundSelector} ${styles.metallGold} ${
              metallColor === 'gold' ? styles.active : ''
            }`}
          ></div>

          <div
            onClick={() => metallColorHandle('black')}
            className={`${styles.roundSelector} ${styles.metallBlack} ${
              metallColor === 'black' ? styles.active : ''
            }`}
          ></div>
        </div>
      </div>

      <div className={styles.panelWrapper}>
        <h3>Material</h3>
        <div className={styles.selectorWrapper}>
          <div
            onClick={() => materialHandle('leather')}
            className={`${styles.button} ${
              material === 'leather' ? styles.textActive : ''
            }`}
          >
            <span>Leather</span>
          </div>
          <div
            onClick={() => materialHandle('fabric')}
            className={`${styles.button} ${
              material === 'fabric' ? styles.textActive : ''
            }`}
          >
            <span>Fabric</span>
          </div>
          <div
            onClick={() => materialHandle('denim')}
            className={`${styles.button} ${
              material === 'denim' ? styles.textActive : ''
            }`}
          >
            <span>Denim</span>
          </div>
        </div>
      </div>
    </div>
  );
};
