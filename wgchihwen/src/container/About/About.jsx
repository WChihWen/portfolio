import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts =[
// 	{title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01},
// 	{title: 'Frontend Development', description: 'I am a good web developer.', imgUrl: images.about02},
// 	{title: 'Backend Development', description: 'I am a good web developer.', imgUrl: images.about03},
// 	{title: 'MERN Stack', description: 'I am a good web developer.', imgUrl: images.about04}
// ]

const About = () => {
	// data from sanity
	const [abouts, setAbouts] = useState([]); 

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		function sortByProperty(property, asc){  
			return function(a,b){  
				if(asc){
					return (a[property] > b[property]) ? 1: -1 ;
				}else{
					return (a[property] > b[property]) ? -1: 1 ;
				}
			}  
		 }
		client.fetch(query)
			.then((data) => setAbouts(data.sort(sortByProperty('sorting',true))))
	}, []);


	return (
		<>
			<div>
				<h4 className="head-text">
					Should always learn from everything; <br />Should focus on in order to know more, know all. <br /><br />
				</h4>
				<p className="p-text">
					Software developer with up to 6 years of experience in <b>ASP.NET, VB.NET, Microsoft SQL Server, Javascript, jQuery, CSS3/HTML5</b>, and up to 3 years of experience in Windows Application version. <br/>
					<b>Self-starter</b> as well as an <b>independent worker</b>. Ability to adapt quickly to changes in work content and specifications.
				</p>
			</div>		
			<div className="app__profiles">
				{abouts.map((about,index)=>(
					<motion.div
						whileInView={{opacity:1}}
						whileHover={{scale:1.1}}
						transition={{duration:0.5, type:'tween'}}
						className="app__profile-item"
						key = {about.title + index}
					>
						{/* <img src={about.imgUrl} alt={about.imgUrl} /> */}
						<img src={urlFor(about.imgUrl)} alt={urlFor(about.imgUrl)} />
						<h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
						<p className="p-text" style={{marginTop:10}}>{about.description}</p>

					</motion.div>
				))}
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(About, 'app__about'), 	
	'about',
	"app__whitebg"
);