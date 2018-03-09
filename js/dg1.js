var arr=[1,2,3,4,5,6,7];
var P=document.getElementsByTagName("p");
P[0].innerHTML=arr;
function show(){
	function pj(x){
	if(x==0){
		return arr[0]
	}else{
		return arr[x]+pj(x-1)
	};
};
var n=arr.length;
var arr_pjs=pj(n-1)/n;
P[1].innerHTML=arr_pjs;
}
