'use client';

import styles from './styles.module.scss';
import PlotComponent from '../PlotComponent/PlotComponent';
import NewPlot from '../NewPlot';

/**
 * Компонент `MainContent` отображает 
 */
const MainContent = () => {


    return (
        <div className={styles.container}>
            {/* <PlotComponent /> */}
            <NewPlot/>
        </div>
    );
};


export default MainContent;