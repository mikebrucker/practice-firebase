import React from 'react';

const ProjectSummary = ({project}) => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{project.title}</span>
				<p>{project.content}</p>
				<p>Posted by the Captain</p>
				<p className="grey-text">30th November, 12pm</p>
			</div>
		</div>
	)
}

export default ProjectSummary;