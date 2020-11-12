   var temp;
        var opt;
        var cal;
        function operate(id) {
            if(opt != undefined && opt != " "){
                if (cal == undefined || cal  == " "){
                    cal = id;
                    cal  = document.getElementById("demo").innerHTML = cal ;
                }
                else {
                    cal  = cal + id;
                    document.getElementById("demo").innerHTML = cal ;
                    cal = parseInt(cal );
                }
            }
            else{
                temp = document.getElementById("demo").innerHTML;
                if (temp == " "){
                    temp = document.getElementById("demo").innerHTML = id;
                }
                else {
                    temp = document.getElementById("demo").innerHTML = temp + id;
                    temp = parseInt(temp);

                }
            }
        }
 function calc(id){
            if( opt != undefined && opt != " "){
                if( opt == "add"){
                    temp = parseInt(temp) + parseInt(cal );
                    document.getElementById("demo").innerHTML = temp;
                }
                else if(opt == "substract"){
                    temp = parseInt(temp) - parseInt(cal );
                    document.getElementById("demo").innerHTML = temp;
                }
                else if (opt == "multiply") {
                    temp = parseInt(temp) * parseInt(cal );
            document.getElementById("demo").innerHTML = temp;
            }
            else if ( opt == "divide") {
                    temp = parseInt(temp) / parseInt(cal );
                    document.getElementById("demo").innerHTML = temp;
            }
                cal = " ";
                opt = id;
        } else {
                opt = id;
    }
}
    
      function clear_screen() {
            temp = " ";
            opt = " ";
            cal  = " ";
            document.getElementById("demo").innerHTML = temp;
}