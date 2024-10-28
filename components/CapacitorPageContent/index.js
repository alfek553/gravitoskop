import ButtonDelay from "../ButtonDelay";
import DownloadButton from "../DownloadButton";
import NewPlot from "../NewPlot";
import PlotComponent from "../PlotComponent/PlotComponent";
import StopMeasurement from "../StopMeasurement";
import FrequencyEdit from "./FrequencyEdit";
import styles from './styles.module.scss';
/**
 * Компонент `CapacitorPageContent` отображает страницу с 
 */
const CapacitorPageContent = () => {
    const pageApiUrl = "/api/proxy?source=capacitor"; 
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.plotWrapper}>
                    <NewPlot apiUrl={pageApiUrl}/>
                    <PlotComponent/>
                </div>
                <div className={styles.buttonWrapper}>
                    <ButtonDelay />
                </div>
                <div className={styles.buttonWrapper}>
                    <FrequencyEdit />
                </div>
                <StopMeasurement/>
                <DownloadButton/>
            </div>
        </div>

    );
}
export default CapacitorPageContent;