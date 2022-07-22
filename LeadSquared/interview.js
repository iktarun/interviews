function deepCopy(source, dest) {
  for (let item in source) {
    if (typeof item !== "object") {
      dest[item] = source[item];
    } else {
      dest[item] = {};
      deepCopy(source[item], dest[item]);
    }
  }
}

let obj = {
  name: "Tarun",
  address: {
    city: "Bangalore",
    pinCode: 31232,
  },
};

let dest = {};
deepCopy(obj, dest);
console.log("Result:", dest);


///////////////////////////////// Round 2/


Src
	
mssql
dependecies
axios

graphl
	middleware
	schema
	resolver
	controller/service layer
	Model layer	

helpers
	

const res = axios.post('/url', {options}, function(err, res){
	
}).then(
	
);




aynsc function name(id){
	const res = await getDataFrolmDB(id);
	return res;
}

//get employee data


aynsc function getData(id){

--
const res = await name(id);
---
---

}


retrun getData();


--------------------------------
app.get('/', function(req, res){
});

app.post('/insertData', function(req, res){

});
----------------------------------

const route = app.Router();
route.get('/', function(req, res){
});
route.post('/', function(req, res){
});



headers:{
	url:
	type:'applicatoon/json'	
}
body : `query{(id: 1)
	{
		name,
		lname
	}`
}


headers:{},
mutation{(id: 1}, data:{name:"kkk"})
	{
		name,
		lname
	}
}


---------------------------------------------------------
Parent
Child


shouldComponentt(prevProp, prevState){
	return false;	
}


//parent
class Parent extends React.Component{
	
	constructor(props){
		super(props);
		this.state: []
	}
	
	componentDidMount(){
		//get the data
		//set the state
	}


	render(){
		<Child data={this.state.data} color:"red">
		</Child>	
	}	
}


//Child
class Childextends React.Component{
	
	constructor(props){
		super(props);
		this.state: []
	}
	
	componentDidMount(){
		//get the data
		//set the state
	}

	shouldComponenet(prevProps, prevState){
		/
const {data}
	}



	render(){
		<div style={{color:this.props.color}}>
		</div>	
	}	
}


Redux


component, {
	this.props.getData()	
}


actions.js

|

dipatch({type:'getdata', payload})

|

Store






















	
