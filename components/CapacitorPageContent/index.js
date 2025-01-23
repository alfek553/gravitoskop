"use client";
import { useState } from "react";
import ButtonDelay from "../ButtonDelay";
import DownloadButton from "../DownloadCapacitor";
import NewPlot from "../NewPlot";
import PlotComponent from "../PlotComponent/PlotComponent";
import StopMeasurement from "../StopCapacitor";
import FrequencyEdit from "./FrequencyEdit";
import OperatingMode from "../OperatingMode";
import DateRangePicker from "../DateRangePicker";
import styles from './styles.module.scss';
import StopCapacitor from "../StopCapacitor";
import DownloadCapacitor from "../DownloadCapacitor";
/**
 * Компонент `CapacitorPageContent` отображает страницу с графиком данных конденсатора
 */
const CapacitorPageContent = () => {
    const pageApiUrl = "/api/proxy?source=capacitor";
      const [isRealtime, setIsRealtime] = useState(false);
      const [dateRange, setDateRange] = useState([null, null]);
      const handleDateChange = (start, end) => {
        setDateRange([start, end]);
        if (start && end) {
          setIsRealtime(false); // Выключаем режим реального времени при выборе диапазона
        }
      };
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.plotWrapper}>
                    <NewPlot apiUrl={pageApiUrl} isRealtime={isRealtime} dateRange={dateRange} />
                    {/* <PlotComponent /> */}
                </div>
                <DateRangePicker onDateChange={handleDateChange} pageApiUrl={pageApiUrl} />
                <OperatingMode isRealtime={isRealtime} onModeChange={setIsRealtime} onDateChange={handleDateChange} />
                <div className={styles.buttonWrapper}>
                    <ButtonDelay />
                </div>
                <div className={styles.buttonWrapper}>
                    <FrequencyEdit />
                </div>
                <StopCapacitor apiUrl={pageApiUrl}/>
                <DownloadCapacitor apiUrl={pageApiUrl}/>
            </div>
        </div>

    );
}
export default CapacitorPageContent;