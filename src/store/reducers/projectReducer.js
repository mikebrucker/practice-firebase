const initState = {
	projects: [
		{
			id: '1',
			title: 'Practice',
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id amet consequuntur nulla molestias corrupti aperiam ea ipsa, vero numquam sed fugiat rem magni qui sint. Perspiciatis necessitatibus ad ut qui.'
		},
		{
			id: '2',
			title: 'Example',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus reprehenderit quas illum ratione tenetur voluptatum fugiat distinctio mollitia atque, assumenda sed optio. Nihil enim illo ipsam nostrum saepe atque.'
		},
		{
			id: '3',
			title: 'Test',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque reiciendis tempore eum assumenda eligendi, optio quidem! Voluptate ratione, quis tempore aperiam ad ullam quam pariatur dolorem, nulla alias ex.'
		},
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR' :
			console.log('create project error', action.err);
			return state;
		default: 
			return state;
	}
}

export default projectReducer;