import React from 'react'
import "./list.scss";
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';

export default function List() {
	return (
		<div className="list">
			<span className="listTitle">continue to watch</span>
			<div className="wrapper">
				<ArrowBackIosOutlined/>
				<ArrowForwardIosOutlined/>
			</div>
		</div>
	)
}