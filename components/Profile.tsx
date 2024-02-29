// Profile.jsx
import styles from '@system/layouts/demos/DemoBentoLayout.module.scss';

import profileStyles from '@components/Profile.module.scss'
import * as React from 'react';
import {H1, H2} from '@system/typography';
import * as Utilities from '@common/utilities';


export default function Profile(){
  
  return(
      <div className={Utilities.classNames(styles.root, profileStyles.profileInfo)}>
        <div className={styles.bento}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.full}><img src='/pfp_temp.jpg' alt='Profile Picture' className={profileStyles.profileImage} /></div>
            </div>
            <div className={styles.columnWide2}>
              <div className={Utilities.classNames(profileStyles.alignContent)}>
                <H1>PABLO LARA</H1>
                <H2>FULL STACK DEVELOPER</H2>
                <H2>COMIC ARTIST</H2>
              </div>
            </div>
            {/* <div className={styles.column}></div> */}
          </div>
        </div>
      </div>
  );
}
