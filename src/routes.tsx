import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Routes() {
  return (
	<Router>
		<Link to="/">
			Home
		</Link>
	</Router>
  );
}

export default Routes;
