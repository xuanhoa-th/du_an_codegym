
let st = ["1","2","2","2","2"];
function show(array){
	let html = '';
	for(let i = 0; i<array; i++){
		html +="<tr>";
		html +="<td>";
		html += i+1;
		html +="</td>";
		html +="<td>";
		html =+ array[i];
		html +="</td>";
	}
	document.getElementById("caro_table").innerHTML = html;
}
show(st);