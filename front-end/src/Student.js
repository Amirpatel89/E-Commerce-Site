import React, {Component} from 'react';

class Student extends Component{
	render(){
		var students = [
			'Casey',
			'Eddie',
			'Jamie',
			'Valeria',
		];
		var studentArray = students.map((student)=>{
			return (<li>{student}</li>)
		})
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}




export default Student;