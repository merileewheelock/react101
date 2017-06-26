var products = [
	{
		category: 'Sporting Goods',	
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',	
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',	
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',	
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]



function ProductTable(props){
	var rows = [];
	var lastCategory = "";
	var key = 0;
	props.products.map(function(currProduct, index){
		if (currProduct.category !== lastCategory){
			rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
			lastCategory = currProduct.category;
			key++;
		}
		rows.push(<ProductRow key={key} randomThing={currProduct} />)
	});
	// console.log(rows);
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function ProductCategoryRow(props){
	return(
		<tr className="category-row">
			<th>{props.category}</th>
		</tr>
	)
}

function ProductRow(props){
	if(props.randomThing.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.randomThing.name}</td>
			<td>{props.randomThing.price}</td>
		</tr>
	)
}

function SearchBar(){
	return(
		<form className="search-bar">
			<input placeholder="Search" type="text" />
		</form>
	)
}

function FilterableProductTable(props){
	return(
		<div>
			<SearchBar />
			<ProductTable products={props.products} />
		</div>
	)
}

function Application(props){
	// console.log(props)
	return(
		<div className="container">
			<h1>React Checklist Rules</h1>
			<FilterableProductTable products={props.products}/>
		</div>
	)
}

ReactDOM.render(
	<Application products = {products} />,
	document.getElementById('root')
)