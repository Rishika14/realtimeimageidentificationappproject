
function modelLoaded () {
  console.log('Model Loaded!')
}
function gotResult (error, results){
if(error) {
  console.error(error);
}else {
  console.log(results);
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2                                                                               );
}
}