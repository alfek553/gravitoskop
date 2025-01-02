import styles from './styles.module.scss';
import Form from './Form';

/**
 * Компонент `ContactPageContent` отображает страницу с контактной формой
 */
const ContactPageContent = () => {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.greetContainer}>
                    <p className={styles.textContent}>Hello!</p>
                    <p className={styles.textContent}>Share your opinion about us.</p>
                </div>
                <Form />
                <div className={styles.textContainer}>
                    <p className={styles.textContent}> Нам важно ваше мнение о нас. Помогите нам улучшить наш сайт!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;
