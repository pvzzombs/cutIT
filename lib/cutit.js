/*	*
	* CutIt.js 
	* use for fun purposes only
	* do not use for auto
	* correct syntax js.
  * removes lines with syntax errors
  * base code of EasyCut.js
  * uses JSHINT
	*/
//Created by pvzzombs at
//this February 18, 2018

//create a main function
function cutit(str){
	var a,i,w,x,y = [];
	JSHINT(str);
	if(JSHINT.errors.length > 0){
		for(i = 0; i < JSHINT.errors.length; i++){
		if(y.indexOf(JSHINT.errors[i].line) == -1){
		y.push(JSHINT.errors[i].line - 1);
		}
	}
	y = y.equal();
	str = str.split("\n");
	if((str.length - 1) === 0){
		return "";
	}
	//[0,1,2]
	//length = 3 -1
	//max index = 2
	var z = y.length - 1;
	while(z != -1){
		str.splice(y[z],1);
		z--;
	}
    JSHINT(str);
    if(JSHINT.errors.length > 0){
      //more errors?
      cutit(str.join("\n"));
    }else{
  		return str.join("\n");
    }
}
return str;
}
Array.prototype.equal = function(){
	var x = [];
	var i, j;
	if(this.length){
		for(i = 0; i < this.length; i++){
			if(this[i] != this[i+1]){
				x.push(this[i]);
			}
		}
		while(this.length > 0){
          this.pop();
        }
      	for(j = 0; j < x.length; j++){
          this.push(x[j]);
        }
	return this;
};
