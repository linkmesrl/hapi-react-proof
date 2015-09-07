import React from "react";
import {Route, DefaultRoute} from "react-router";
import Main from "views/Main";
import Babbeo from "views/Babbeo";
/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
	<Route path="/">
		<DefaultRoute handler={Main} />
		<Route name="stronzo" path="babbeo">
			<DefaultRoute handler={Babbeo} />
		</Route>
		<Route path="/api/cazzate" />
	</Route>
);
