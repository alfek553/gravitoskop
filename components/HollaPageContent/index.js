"use client";

import { useState } from "react";
import ButtonDelay from "../ButtonDelay";
import DownloadButton from "../DownloadButton";
import NewPlot from "../NewPlot";
import StopMeasurement from "../StopMeasurement";
import OperatingMode from "../OperatingMode";
import DateRangePicker from "../DateRangePicker";
import styles from './styles.module.scss';
/**
 * Компонент `HollaPageContent` отображает страницу с графиком датчика холла
 */
const HollaPageContent = () => {
  const pageApiUrl = "/api/proxy?source=holla";
  const [isRealtime, setIsRealtime] = useState(true);
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
        </div>
        <DateRangePicker onDateChange={handleDateChange} pageApiUrl={pageApiUrl} />
        <OperatingMode isRealtime={isRealtime} onModeChange={setIsRealtime} onDateChange={handleDateChange} />
        <div className={styles.buttonWrapper}>
          <ButtonDelay />
        </div>
        <StopMeasurement apiUrl={pageApiUrl}/>
        <DownloadButton apiUrl={pageApiUrl}/>
      </div>
    </div>
  );
};

export default HollaPageContent;
