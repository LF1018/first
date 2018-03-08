var str1="abcdefg";
var arr1=[1,2,3,4,5,6];
var P=document.getElementsByTagName("p");
P[0].innerHTML=str1+"&nbsp"+arr1;
var arr2=str1.split("");
var str2=arr2.join("0");
var arr3=str2.split("");

function show(){
	function cr(){
	for(var i=0,len=arr3.length;i<len;i++){
		if(i%2==1){arr3[i]=arr1[(i-1)/2]};
	};
	return arr3;
};
var arr4=cr();
var str3=arr4.join("");
P[1].innerHTML=str3;
}
