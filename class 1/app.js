var mobiles = {
  iphone: {
    iphone7: {
        RAM:"8",
        ROM:"64",
        Camera:"Camera",
        LCD:"LCD"
    },
    iphone8: {
  RAM:"",
  ROM:"",
  Camera:"",
  LCD:""
},
    iphone8plus: {
      RAM:"",
      ROM:"",
      Camera:"",
      LCD:""
    },
    iphoneX: {},
    iphone11: {},
  },
  xiomi: {
    redmiA2: {},
    redmi10: {},
    redmi11: {},
    redmi12: {},
    redmi13: {},
    redmi13C: {},
  },
  realme: {
    realmiNote50: {},
    realmiC67: {},
    realmiC53: {},
    realmi9: {},
    realmi9i: {},
  },
  tecno: {
    spark20: {},
    spark20Pro: {},
    spark20C: {},
    POVA6: {},
    PhantomV: {},
  },
};

 
var brandSelect = document.getElementById("brandSelect");
var modelHeader = document.getElementById("modelHeader");
var modelSelect = document.getElementById("modelSelect");
var speci = document.getElementById("specs");


var ramSpan = document.getElementById("ram");
var romSpan = document.getElementById("rom");
var cameraSpan = document.getElementById("camera");
var lcdSpan = document.getElementById("lcd");



var  getBrands = Object.keys( mobiles);
 
  for(var i=0;i<getBrands.length;i++){
     
    brandSelect.innerHTML += `<option>${getBrands[i]}</option>`
  }

brandSelect.addEventListener("change", function() {
   
  var selectedBrand = brandSelect.value;

   
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  if (selectedBrand !== "") {
    for (var model in mobiles[selectedBrand]) {
      var option = document.createElement("option");
      option.text = model;
      option.value = model;
      modelSelect.add(option);
    }
    modelHeader.style.display = "block";
    modelSelect.style.display = "block";
  } else {
    modelHeader.style.display = "none";
    modelSelect.style.display = "none";
    speci.style.display = "none";
  }
});

 
modelSelect.addEventListener("change", function() {
   
   
  var selectedBrand = brandSelect.value;
  var selectedModel = modelSelect.value;

  
  var specs = mobiles[selectedBrand][selectedModel];

  ramSpan.textContent  = specs.RAM || "Not Available",
  romSpan.textContent = specs.ROM || "Not Available";
  cameraSpan.textContent = specs.Camera || "Not Available";
  lcdSpan.textContent = specs.LCD || "Not Available";

  speci.style.display = "block";
});






// *********** CIRCUITS ************

let age = 1;
let stdCard = 10;

let status =age  && stdCard
// if &&(and) is used if both conditions are true then 2nd value is saved into variable else false
// if ||(or) is used if any one condition is true then 1nd value is saved into variable else 2nd value
console.log(status);