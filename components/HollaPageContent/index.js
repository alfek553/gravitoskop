import ButtonDelay from "../ButtonDelay";
import DownloadButton from "../DownloadButton";
import NewPlot from "../NewPlot";
import StopMeasurement from "../StopMeasurement";
import styles from './styles.module.scss';
/**
 * Компонент `HollaPageContent` отображает страницу с 
 */
const HollaPageContent = () => {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.plotWrapper}>
                    <NewPlot />
                </div>
                <div className={styles.buttonWrapper}>
                    <ButtonDelay />
                </div>
                <StopMeasurement/>
                <DownloadButton/>
            </div>
        </div>

    );
}
export default HollaPageContent;