import React from 'react';

class Demo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			services: [],
			clients: [],
			updating: false
		};
		
		this.clearProducts = this.clearProducts.bind(this);
		this.uploadProducts = this.uploadProducts.bind(this);
	}

	componentDidMount() {
		var url = 'https://api-bigdata.tumi-soft.com/products-tumiexpo';
		fetch(url, {
				method: "GET", // *GET, POST, PUT, DELETE, etc.
				mode: "cors", // no-cors, cors, *same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				credentials: "same-origin", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
				},
				redirect: "follow", // manual, *follow, error
				referrer: "no-referrer", // no-referrer, *client
		}).then(function(response) {
				var responseJson = null;
				if (response.ok) {
					responseJson = response.json();                
				}
				return responseJson;
		}).then(function(responseJson) {
				if (responseJson) {
					// fetch correcto
					// grabar objeto en state
					this.setState({ 
						products : responseJson.products, 
						services: responseJson.services
					});
				} else {
					alert("No hay data")
				}
		}.bind(this));
	}

	clearProducts(event) {
		event.preventDefault();
		this.setState({
			products : []
		});
		console.log("Products", this.state.products);
	}

	uploadProducts(event) {
		event.preventDefault();
		var url = 'https://api-bigdata.tumi-soft.com/products-tumiexpo';
		fetch(url, {
				method: "GET", // *GET, POST, PUT, DELETE, etc.
				mode: "cors", // no-cors, cors, *same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				credentials: "same-origin", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
				},
				redirect: "follow", // manual, *follow, error
				referrer: "no-referrer", // no-referrer, *client
		}).then(function(response) {
				var responseJson = null;
				if (response.ok) {
					responseJson = response.json();                
				}
				return responseJson;
		}).then(function(responseJson) {
				if (responseJson) {
					// fetch correcto
					// grabar objeto en state
					this.setState({ 
						products : responseJson.products
					});
				} else {
					alert("No hay data")
				}
		}.bind(this));
		console.log("Products", this.state.products);
	}
	
	render() {
		return (
			<>
			<h1>Hola Mundo!</h1>
			<h3>Productos</h3>
			<button onClick={this.clearProducts}>Borrar</button>
			<button onClick={this.uploadProducts}>Cargar</button>
			<table border="1">
				<thead>
					<th>Nombre</th>
					<th>Categoria</th>
				</thead>
				<tbody>
				{this.state.products.map((object) => {
					return (<tr key={ object.id }>
							<td>{ object.name }</td>
							<td>{ object.categoryName }</td>
						</tr>)
					})
				}
				</tbody>
			</table>
			<hr/>
			<h3>Servicios</h3>
			<table border="1">
				<thead>
					<th>Nombre</th>
					<th>Categoria</th>
				</thead>
				<tbody>
				{this.state.services.map((object) => {
					return (<tr key={ object.id }>
							<td>{ object.name }</td>
							<td>{ object.categoryName }</td>
						</tr>)
					})
				}
				</tbody>
			</table>
			</>
		);
	}
}

export default Demo;
