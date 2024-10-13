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
                    <p className={styles.textContent}>Helllo!</p>
                    <p className={styles.textContent}>Share your opinion about us.</p>
                </div>
                <Form />
                <div className={styles.textContainer}>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                    <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
                        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
                        nihil quisquam itaque eos tempore veniam accusantium porro cum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;
