import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id; 
	return (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">Project Title - {id}</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, atque? Commodi beatae nostrum eos assumenda, saepe inventore rerum ducimus obcaecati recusandae exercitationem totam odit laborum, ratione omnis, atque voluptate eaque?</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>Posted by the Captain</div>
						<div>30th November, 12pm</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails;
