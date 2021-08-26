// async function

// async function details(){
// 	return 'Chittagong';
// }
// console.log(details());

// details().then((result)=>{
// 	console.log(result);
// }).catch((err)=>{
// 	console.log(err.stack);
// })

// async function es6 function

// let d = async () => 'Mohiuddin And Hosneara';
// console.log(c());
// c().then((result)=>{
// 	console.log(result);
// }).catch((err)=>{
// 	console.log(err.stack);
// });

// async and await

// let value = async ()=>{
// 	console.log(2);
// 	await console.log(3);
// 	console.log(4);
// }
// console.log(1);
// value();
// console.log(5);
// console.log(6);

// async and await with fetch data way(1)

// let myvalue = async ()=>{
// 	console.log('A');
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let resValue = await response.json();
// 	return resValue;
// }
// myvalue().then((data)=>{
// 	data.forEach((d)=>{
// 		console.log(d.name);
// 	})
// }).catch((error)=>{
// 	console.log(error.stack);
// });
// console.log("B");

// async and await with fetch data way(2)

let myvalue = async ()=> {
	try{
		return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
	}catch(error){
		console.log(error);
	}
}
myvalue().then((data)=>{
	console.log(data);
});
myvalue().then((mydata)=>{
	// console.log(typeof(mydata)); object data

	// put those value inside navbar
	let a = document.getElementById('a');
	let b = document.getElementById('b');
	let c = document.getElementById('c');

	// for name
	let name = document.getElementById('name');

	let n1 = mydata[0].name;
	let n2 = mydata[1].name;
	let n3 = mydata[2].name;

	// for name value insert
	let myName = ()=>{
		a.textContent = n1;
		b.textContent = n2;
		c.textContent = n3;
	}
	name.addEventListener('click',()=>{
		myName();
	})

	// put those value inside navbar
	let d = document.getElementById('d');
	let e = document.getElementById('e');
	let f = document.getElementById('f');

	// for email
	let email = document.getElementById('email');

	let e1 = mydata[0].email;
	let e2 = mydata[1].email;
	let e3 = mydata[2].email;

	// for name value insert
	let myEmail = ()=>{
		d.textContent = e1;
		e.textContent = e2;
		f.textContent = e3;
	}
	email.addEventListener('click',()=>{
		myEmail();
	})

});