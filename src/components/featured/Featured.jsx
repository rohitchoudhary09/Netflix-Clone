import React from 'react'
import "./featured.scss";
import { PlayArrow } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';

export default function Featured({type}) {
	return (
		<div className="featured">
		  {type && (
		  	<div className="category">
		  		<span>{type === "movie" ? "Movies" : "Series"}</span>
		  		<select name="genre" id="genre">
		  			<option>Genre</option>
		  			<option value="adventure">Adventure</option>
		  			<option value="comedy">Comedy</option>
		  			<option value="crime">Crime</option>
		  			<option value="fantasy">Fantasy</option>
		  			<option value="historical">Historical</option>
		  			<option value="horror">Horror</option>
		  			<option value="romance">Romance</option>
		  			<option value="sci-fi">Sci-fi</option>
		  			<option value="thriller">Thriller</option>
		  			<option value="western">Western</option>
		  			<option value="animation">Animation</option>
		  			<option value="drama">Drama</option>
		  			<option value="documentary">Documentary</option>
		  		</select>
		  	</div>
		  	)}
			<img 
				width="100%;"
				src="https://wallpapercave.com/wp/wp6581315.jpg" 
				alt="_"
			/>
			<div className="info">
				<img src="https://o.remove.bg/downloads/5b633ecb-5abd-4685-8804-7bd7bf2d7400/918ac8598f87e0cfd10926dd20cb6dd1-removebg-preview.png" alt="_" />
				<span className="desc">
					Lorem ipsum officia non cupidatat ullamco aliquip consequat eu quis dolor cillum nulla in id cupidatat magna labore.

				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>

			</div>
		</div>
	);
}