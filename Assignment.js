
  function getLength() {
      var len=document.getElementById("FORM1").length ;
      document.getElementById("Sample").innerHTML = "Number of elements present inside the form are :"+len;
}
var radioCount  = 0;
	var count= 0
	var radiofloor = 0
	var total =0 
	var inputNames = []
	var index = -1
	var valueInput1 = ''
	var valueInput2 =''
	var valueInput3 = ''
	var valueInput4 = ''
	var valueInput51 = ''
	var valueInput53 = ''
	var displayVariable = 1
	
function showTime() {
	 var inputs = document.getElementById("FORM1").elements;
      for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].type !== 'radio'){
			count ++
		}
        if (inputs[i].type == 'radio') {
            radioCount++;
			radiofloor = radioCount/2
        }
    }  
	total = count+Math.floor(radiofloor)
	document.getElementById('div1').style.display="block";
	document.getElementById('div2').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('button').style.display="none";
}


function OnChangeInput1(){
      valueInput1 = document.getElementById("input1").value
     if(valueInput1.length >= 3){
		 index++
	move("input1");
	}else {
		decrement("input1")
	}
		if(valueInput1 !== '' && valueInput2 !== ''){
			displayVariable = 2
			displyDiv()
		}
	
}

function OnChangeInput2(){
      valueInput2 = document.getElementById("input2").value
     if(valueInput2.length >= 3){
		 		 index++
	move("input2");
	}else {
		decrement("input1")
	}
	
	
		if(valueInput1 !== '' && valueInput2 !== ''){
			displayVariable = 2
			displyDiv()
		}
	
}

function onChangeSelect1(){
     valueInput3 = document.getElementById("select1").value
     if(valueInput3 !== ''){
		 		 index++
	move("select1");
	}else {
		decrement("input1")
	}
		if(valueInput3 !== '' && valueInput4 !== ''){
			displayVariable = 3
			displyDiv()
		}
	
}

function onChangeSelect2(){
     valueInput4 = document.getElementById("select2").value
     if(valueInput4 !== ''){
		 		 index++
	move("select2");
	}else {
		decrement("input1")
	}
	
		if(valueInput3 !== '' && valueInput4 !== ''){
			displayVariable = 3
			displyDiv()
		}
	
}

function onChangeRadio1(){
     valueInput51 = document.getElementById("radio1").value
     if(valueInput51 !== ''){
	move("radio1");
	}
}

function onChangeRadio2(){
      valueInput53 = document.getElementById("radio2").value
     if(valueInput53 !== '' ){
	move("radio2");
}
}

var i = 0;
	var increment=0;
 
	
function move(field) {
	var elem = document.getElementById("myBar");
	if(inputNames.includes(field)){
		increment = increment
	}else{
		inputNames.push(field)
		increment = increment+(100/total)
	}
	console.log(increment);
	 console.log(JSON.stringify(inputNames));
	elem.style.width =increment+"%"
}

function decrement(field) {
	var elem = document.getElementById("myBar");
		var filteredArray = inputNames.filter(item => item !== field)
		inputNames = filteredArray
		increment = increment-(100/total)
	
	console.log(increment);
	 console.log(JSON.stringify(inputNames));
	elem.style.width =increment+"%"
}

function onClickButton(){
	displyDiv()
	displayVariable = displayVariable -1
}

function displyDiv(){
 if(displayVariable == 1){
	 document.getElementById('div1').style.display="block";
	document.getElementById('div2').style.display="none";
	document.getElementById('div3').style.display="none";
 }else if(displayVariable == 2){
	 document.getElementById('div1').style.display="none";
	document.getElementById('div2').style.display="block";
	document.getElementById('div3').style.display="none";
	document.getElementById('button').style.display="block";
 }else{
	 document.getElementById('div1').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('div3').style.display="block";
	document.getElementById('button').style.display="block";
 }
	
}


