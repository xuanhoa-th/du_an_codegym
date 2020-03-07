// let userName = prompt("Who's there?", '');
// if (userName == 'Admin') {
// 	let pass = prompt('Password?','');
// 	if (pass == 'TheMaster') {
// 		alert('Welcome');
// 	} else if (pass == null) {
// 		alert('Canceled.');
// 	} else {
// 		alert('Wrong password');
// 	}
// } else if (userName == null) {
// 	alert('Canceled');
// } else {
// 	alert("I don't know you");
// }

let userName = prompt("who's there?",'');
if (userName == 'admin') {
	alert("welcome");
} else if (userName === ""){
	alert("canceled");
} else {
	alert(" i dont know");
}

let pass = prompt("password",'');
if (pass == 'theMaster') {
	alert("wellcom");
} else if (pass == "") {
	alert('canled');
} else {
	alert("wrong password");
}