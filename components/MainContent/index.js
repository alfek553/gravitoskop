'use client';

import styles from './styles.module.scss';
import PlotComponent from '../PlotComponent/PlotComponent';

/**
 * Компонент `MainContent` отображает 
 */
const MainContent = () => {


    return (
        <div className={styles.container}>
            <PlotComponent />
        </div>
    );
};


export default MainContent;