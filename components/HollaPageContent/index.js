"use client";

import { useState } from "react";
import ButtonDelay from "../ButtonDelay";
import DownloadButton from "../DownloadButton";
import NewPlot from "../NewPlot";
import StopMeasurement from "../StopMeasurement";
import OperatingMode from "../OperatingMode";
import styles from './styles.module.scss';
/**
 * Компонент `HollaPageContent` отображает страницу с 
 */
const HollaPageContent = () => {
    const pageApiUrl = "/api/proxy?source=holla";
    const [isRealtime, setIsRealtime] = useState(true);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.plotWrapper}>
                    <NewPlot apiUrl={pageApiUrl} isRealtime={isRealtime} />
                </div>
                <OperatingMode onModeChange={setIsRealtime} />
                <div className={styles.buttonWrapper}>
                    <ButtonDelay />
                </div>
                <StopMeasurement />
                <DownloadButton />
            </div>
        </div>
    );
};

export default HollaPageContent;