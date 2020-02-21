import React from 'react';
import Emoji from './Emoji';

import './ListElement.css';

const ListElement = ({ details, onDelete }) => {
	return (
		<li>
			{details.name}
			<button onClick={() => onDelete(details.id)}>
				<Emoji symbol="❌" label="cross" />
			</button>
		</li>
	);
};

export default ListElement;
