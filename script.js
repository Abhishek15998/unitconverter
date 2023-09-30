var meter = document.getElementById("meter");
var centimeter = document.getElementById("centimeter");

meter.addEventListener('input', function(){
    let m = this.value;
    let c = m*100;
    centimeter.value = c;

});

centimeter.addEventListener('input', function(){
    let c = this.value;
    let m = c/100;
    meter.value = m;

});
