import React from 'react';
import Button from 'rs-button';

let DropButton = (props) => {
	return (
		<Button {...props} className="dropdown-toggle">
			<span dangerouslySetInnerHTML={{__html: props.title}} />
			{ !props.noCaret && <span className="caret"/> }
		</Button>
	);
}

export default DropButton;
