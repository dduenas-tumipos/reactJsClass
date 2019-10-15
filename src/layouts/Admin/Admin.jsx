/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";

import routes from "routes.js";

import NotificationAlert from "react-notification-alert";

var ps;

class Admin extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// WELCOME NOTIFICATION
	}
	componentWillUnmount() {
	}
	componentDidUpdate(e) {
	}
	handleBgClick = color => {
		this.setState({ backgroundColor: color });
	};

	notify = place => {
        var type = "success";
        var options = {};
        options = {
        place: place,
        message: (
            <div>
                <div>
                    Bienvenido a Expotextil Perú 2019!
                </div>
            </div>
        ),
        type: type,
        icon: "tim-icons icon-bell-55",
        autoDismiss: 7
		};
		this.refs.notificationAlert.notificationAlert(options);
	};
	
	render() {
		return (
		<>
		</>
		);
	}
}

export default Admin;
