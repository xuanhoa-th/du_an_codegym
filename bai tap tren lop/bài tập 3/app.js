function myFunction(){
			let a = Number(document.getElementById("edge1").value);
			let b = Number(document.getElementById("edge2").value);
			let c = Number(document.getElementById("edge3").value);
			let acreage,p;
			p = (a+b+c)/2;
			acreage = Math.sqrt( p*(p-a)*(p-b)*(p-c) )
		let	right_triangle = ((a*b)/2)
		let	perimeter = (a+b+c)
			if (a<b+c && b<a+c && c<a+b){
				 	if (a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){ 
				 		  document.getElementById('result_kq').innerHTML= ("Là tam giác vuông");
				 		  document.getElementById('result_S').innerHTML= ("Diện tích S =" + right_triangle) ;
				 		}
				 	else
				 		if (a==b && b==c){
				 			document.getElementById('result_kq').innerHTML= ("Là tam giác đều"); 
				 			}
				 			else
				 				if (a==b || a==c || b==c){
				 					document.getElementById('result_kq').innerHTML= ("Là tam giác cân");
				 						}
				 					else
				 					{
				 						 document.getElementById('result_kq').innerHTML= ("Là 3 cạnh tam giác");
				 					}
			document.getElementById('result_P').innerHTML= ("Chu vi P =" + perimeter);
			document.getElementById('result_S').innerHTML= ("Diện tích S =" + acreage );				
			}
				else document.getElementById('result_kq').innerHTML= ("Không phải là 3 cạnh tam giác") ;
			}