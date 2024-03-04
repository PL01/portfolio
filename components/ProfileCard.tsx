import { H1 } from "@root/system/typography";
import * as Utilities from '@common/utilities';
import gridStyles from '@components/ProfileGrid.module.scss';
import styles from "@components/ProfileCard.module.scss"

export default function ProfileCard({heading, description}){
    return (
        <div className={Utilities.classNames(styles.columnWide,styles.hoverOverContainer)}>
        <div className={styles.content}>
        <button type="button" className={Utilities.classNames(gridStyles.collapsible)}>{heading && <H1>{heading}</H1>}</button>
            <div className={Utilities.classNames(gridStyles.content, gridStyles.sectionXP)}>
            {description && 
            <p>{description}</p> }   
            </div>
        </div>
        <img src='/banner_temp1.jpg' className={Utilities.classNames(gridStyles.gridImg)}></img>
    </div>
    )
}