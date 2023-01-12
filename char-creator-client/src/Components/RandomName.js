import React, { useState } from 'react';

export default function RandomName(props) {
	const [randomName, setRandomName] = useState('Soren');
	const namesArray = [
		'Alhandra',
		'Devis',
		'Ember',
		'Jozan',
		'Krusk',
		'Lidda',
		'Mialee',
		'Nebin',
		'Redgar',
		'Soveliss',
		'Tordek',
		'Hennet',
		'Vadania',
		'Zeyrashi',
		'Voth',
		'Rijlan',
		'Leone',
		'Yivis',
		'Khrusos',
		'Soren',
		'Joeri',
		'Aloros',
		'Bartleby Higgentot',
		'Pappardelle Marinara',
		'Lanceroy Fisticuff',
		'Brienya Glaseis Balorbane',
		'Plink Nimblerod',
		'Sandor Rastifar',
		'Solena Ember',
		'Gronk Umberbuck',
		'Grohl',
		'Druzilla Vizzick',
		'Briola Stonks',
		'Vance Avondale',
		'Alessandra Blueberry',
		'Codex',
		'Zaboo',
		'Vork',
		'Bladezz',
		'Clara',
		'Tinkerballa',
	];

	const handleClick = () => {
		setRandomName(
			(randomName) => namesArray[Math.floor(Math.random() * namesArray.length)]
		);

		props.setCharacterName(randomName);
	};

	return (
		<section>
			<button type="button" id="random-name" onClick={() => handleClick()}>
				Random Name
			</button>
		</section>
	);
}
