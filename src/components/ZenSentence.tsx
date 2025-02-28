import {useEffect, useState} from 'react';
import styles from "./ZenSentence.module.css"; // Assuming your CSS file

const ZenSentence = () => {
    const zenSentences = [
        "The wind whispers through the trees, as the moonlight reflects on still waters, showing you the path even when your eyes are closed.",
        "In the quiet, the mind becomes a mirror reflecting the world as it truly is.",
        "Like a flowing river, life moves forward, and all is in constant change.",
        "When the heart is at peace, the world is as it should be.",
        "A single step is enough to change the journey of a thousand miles.",
        "Let go of the past, and the future will reveal its true path.",
        "To live is to be present, to be still is to know all that is.",
        "The tree does not seek the sun; it grows towards it naturally, as the soul grows towards truth."
    ];

    // Randomly pick a Zen sentence
    const [zenSentence, setZenSentence] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * zenSentences.length);
        setZenSentence(zenSentences[randomIndex]);
    }, []); // Empty dependency array to only run on mount

    return (
        <p className={styles.zenSentence}>{zenSentence}</p>
    );
};

export default ZenSentence;
