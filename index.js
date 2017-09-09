function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomRestaurants = function() {
  	restaurant = document.getElementById('restaurant');
  	loop = setInterval(function(){ 
      restaurant.innerHTML = displayRestaurant();
      // loopthrough; 
    }, 500);

    loopColor = setInterval(function(){
    restaurant.style.color = setColor();
  }, 500);
  };

 var getRestaurant = function(){
 	var p = document.createElement("p");
	p.setAttribute("class","center")

 	document.body.appendChild(p);
 	clearInterval(loop);
  clearInterval(loopColor);
  p.textContent = "Great, let's go to " + restaurant.innerHTML + " !";

 };

 function displayRestaurant() {
  restaurantArray = ['Nasi Lemak','Mee Rebus','Maggie Goreng','Hainan Chicken Rice','Fried Rice']
  arrayLength = restaurantArray.length;
  rand = getRandomInt(0, arrayLength);
  
  return restaurantArray[rand];
 };

 function setColor() {
  restaurantColorArray = ['red', 'blue', 'orange', 'black', 'green']
  arrayColorLength = restaurantColorArray.length; 
  randColor = getRandomInt(0, arrayColorLength);

  return restaurantColorArray[randColor]
 }

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", randomRestaurants)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);

