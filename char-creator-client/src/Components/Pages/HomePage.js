import React from 'react';
import { Image } from 'cloudinary-react';

export default function HomePage() {
	return (
		<div className='home-page-container'>
			<section>
			<Image
				cloudName="dr8dbzjws"
				publicId='https://res.cloudinary.com/dr8dbzjws/image/upload/v1673545654/d3euaz1kbzxa2t1s82ji.png'
				></Image>
				<p className="centered-home-page-text">
					Please login or create an account to manage your characters.
				</p>
			
				
			</section>
		</div>
	);
}
