//ProfileGrid.tsx

import { PROFILE_CONTENT } from '@root/content/profile-content';
import * as React from 'react';
import * as Utilities from '@common/utilities';
import gridStyles from '@components/ProfileGrid.module.scss';
import ProfileCard from '@components/ProfileCard';
import demoStyles from '@system/layouts/demos/DemoSimpleGrid.module.scss';

export default function ProfileGrid(){
    
    const profileCards= PROFILE_CONTENT;

    return(
        <div className={demoStyles.root}>
            <section className={gridStyles.gridContainer}>
                <div className={demoStyles.grid}>
                    <div className={gridStyles.columnSection}>
                        {profileCards.map((card, index)=>{
                            return (
                                <div key={index} className={Utilities.classNames(demoStyles.row, gridStyles.exp)}>
                                    <ProfileCard {...card} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

 {/* <div className={styles.row}>
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
                        </div> */}
    {/* <P>
                                    <strong>Crime</strong>
                                </P>
                                <P>
                                    There is a clear correlation between low literacy rates and higher rates of crime. Individuals with low literacy are less likely to fully understand and follow
                                    laws, leading to a higher likelihood of getting into trouble with the law.
                                </P> */}