import { H1, P } from "@root/system/typography";
import * as Utilities from '@common/utilities';
import gridStyles from '@components/ProfileGrid.module.scss';
import cardStyles from "@components/ProfileCard.module.scss"

export default function ProfileCard({heading, description}){
    return (
        <div className={Utilities.classNames(cardStyles.columnWide, cardStyles.hoverOverContainer)}>
            <div className={cardStyles.content}>
                {heading && <H1>{heading}</H1>}
                {description && <P>{description}</P>}
            </div>
            <img src='/banner_temp1.jpg' className={Utilities.classNames(gridStyles.gridImg)} alt="Banner"></img>
        </div>
    )
}