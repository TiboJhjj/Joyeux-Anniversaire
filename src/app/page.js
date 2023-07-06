import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const backgroundMusic = "/song.mp3";

    return (
        <main className={styles.main}>
            <h1>Joyeux anniversaire Tristan !</h1>
            <Image src="/photo.png" alt="Tristant" width={500} height={500} />
            <audio controls autoPlay>
                <source src={backgroundMusic} type="audio/mpeg" />
            </audio>
        </main>
    );
}
