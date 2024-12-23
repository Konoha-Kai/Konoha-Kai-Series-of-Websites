function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('original-image').src = e.target.result;
      document.getElementById('comparison-image').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
  function adjustBrightness(value) {
    var comparisonImage = document.getElementById('comparison-image');
    comparisonImage.style.filter = 'brightness(' + value / 100 + ')';
    document.getElementById('brightness-value').textContent = value;
  }