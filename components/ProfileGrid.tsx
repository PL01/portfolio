//ProfileGrid.tsx

import { H1, H2, H2Sub, H3, H3Sub, P } from '@system/typography';
import * as React from 'react';
import * as Utilities from '@common/utilities';
import gridStyles from '@components/ProfileGrid.module.scss';
import styles from '@system/layouts/demos/DemoSimpleGrid.module.scss';

export default function ProfileGrid(){
    return(
        <div className={styles.root}>
            <section className={gridStyles.gridContainer}>
                <div className={styles.grid}>
                    <div className={gridStyles.columnSection}>
                        <div className={Utilities.classNames(styles.row, gridStyles.exp)}>
                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                {/* <P>
                                    <strong>Crime</strong>
                                </P>
                                <P>
                                    There is a clear correlation between low literacy rates and higher rates of crime. Individuals with low literacy are less likely to fully understand and follow
                                    laws, leading to a higher likelihood of getting into trouble with the law.
                                </P> */}
                                <button type="button" className={Utilities.classNames(gridStyles.collapsible)}><H1>Experience</H1></button>
                                    <div className={Utilities.classNames(gridStyles.content, gridStyles.sectionXP)}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                    <img src='/banner_temp1.jpg' className={Utilities.classNames(gridStyles.gridImg)}></img>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                    <img src='/banner_temp2.jpg' className={gridStyles.gridImg}></img>
                                </div>
                            </div>

                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                <P>
                                    <strong>Projects</strong>
                                </P>
                                <P>
                                    There is a clear correlation between low literacy rates and higher rates of crime. Individuals with low literacy are less likely to fully understand and follow
                                    laws, leading to a higher likelihood of getting into trouble with the law.
                                </P>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                <P>
                                    <strong>Education</strong>
                                </P>
                                <P>
                                    There is a clear correlation between low literacy rates and higher rates of crime. Individuals with low literacy are less likely to fully understand and follow
                                    laws, leading to a higher likelihood of getting into trouble with the law.
                                </P>
                                </div>
                            </div>
                            <div className={styles.columnWide}>
                                <div className={styles.content}>
                                    <img src='/banner_temp2.jpg' className={gridStyles.gridImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}