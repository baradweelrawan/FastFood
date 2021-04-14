var foodprefer = 'healthy';
var userFood = prompt('what kind of food do you Prefer?(healthy,..)');



if(userFood === foodprefer )
  {
    alert('vegetarian');
   
  }
  else
  {
    alert('non-vegetarian');
  
  }  


var costumerprefer= prompt('Please Enter What You Prefer (sea food,fast food,healthy food)?')

if (costumerprefer == 'sea food')
{
   var image ='<img src="https://www.dinneratthezoo.com/wp-content/uploads/2019/06/seafood-pasta-5.jpg" alt= "seafood"/>';
   document.write(image);
}
else if(costumerprefer=='fast food')
{
  var image1 ='<img src="https://www.zinmobi.com/wp-content/uploads/2015/05/online-ordering.jpg" alt= "fastfood" width=500px/>';

   document.write(image1);
}
else if(costumerprefer=='healthy food')
{
   var image2 ='<img src="image/Healthfood.jpg" alt= "Healthfood"/>';

   document.write(image2);
}




