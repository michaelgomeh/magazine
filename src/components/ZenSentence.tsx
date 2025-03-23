import { useEffect, useState } from 'react';
import styles from './ZenSentence.module.css';

const ZenSentence = () => {
	const zenSentences = [
		{
			sentence:
				'The wind whispers through the trees, as the moonlight reflects on still waters, showing you the path even when your eyes are closed.',
			author: 'Anonymous',
		},
		{
			sentence:
				'In the quiet, the mind becomes a mirror reflecting the world as it truly is.',
			author: 'Lao Tzu',
		},
		{
			sentence:
				'Like a flowing river, life moves forward, and all is in constant change.',
			author: 'Heraclitus',
		},
		{
			sentence: 'When the heart is at peace, the world is as it should be.',
			author: 'Buddha',
		},
		{
			sentence:
				'A single step is enough to change the journey of a thousand miles.',
			author: 'Lao Tzu',
		},
		{
			sentence: 'Let go of the past, and the future will reveal its true path.',
			author: 'Anonymous',
		},
		{
			sentence: 'To live is to be present, to be still is to know all that is.',
			author: 'Anonymous',
		},
		{
			sentence:
				'The tree does not seek the sun; it grows towards it naturally, as the soul grows towards truth.',
			author: 'Rumi',
		},
	];

	const [zenSentence, setZenSentence] = useState({ sentence: '', author: '' });

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * zenSentences.length);
		setZenSentence(zenSentences[randomIndex]);
	}, []);

	return (
		<div className={styles.zenSentence}>
			<span className={styles.sentence}>{zenSentence.sentence}</span>
			<span className={styles.author}>&#40;{zenSentence.author}&#41;</span>
		</div>
	);
};

export default ZenSentence;
