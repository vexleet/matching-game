$(function(){
var allElements = ['apple', 'apple', 'banana', 'banana','orange','orange', 'melon','melon', 'pineapple','pineapple','kiwi','kiwi','strawberry','strawberry','raspberry','raspberry', 'peach', 'peach','grape','grape','lemon','lemon','clementine','clementine', 'pear', 'pear','mango','mango','watermelon','watermelon'];
var remainingElements = allElements;
var elementChecker = 0;
var firstElement, secondElement;
var clickedElements = 1;
var mixedElements = new Array();

function randomArray(){
  if(remainingElements.length !== 0){
    var element = Math.floor((Math.random()*remainingElements.length));
    mixedElements.push(remainingElements[element]);
    remainingElements.splice(element, 1);
    randomArray();
  }
  return;
}

function checkForVictory(){
  var allCompletedElements = $('.completed');
  if(allCompletedElements.length === 30){
    alert('You WON!');
    $('td').removeClass('completed').css('background', 'orange');
    remainingElements = ['apple', 'apple', 'banana', 'banana','orange','orange', 'melon','melon', 'pineapple','pineapple','kiwi','kiwi','strawberry','strawberry','raspberry','raspberry', 'peach', 'peach','grape','grape','lemon','lemon','clementine','clementine', 'pear', 'pear','mango','mango','watermelon','watermelon'];
    mixedElements = new Array();
    randomArray();
  }
}

$('tr').on('click', 'td:not(.completed)', function(){
  if(clickedElements === 2) return;
  $(this).css({
    'background': `url(images/${mixedElements[$('td').index(this)]}.png) orange`,
    'background-size': 'cover',
    'background-position': 'center',
  });
  $(this).addClass('check');
  if(elementChecker === 0){
    firstElement = mixedElements[$('td').index(this)];
    elementChecker++;
  }
  else{
    clickedElements++;
    secondElement = mixedElements[$('td').index(this)];
    if(firstElement === secondElement){
      $('.check').removeClass('check').addClass('completed');
      clickedElements = 1;
    }
    else{
      $('td').removeClass('check');
      setTimeout(function(){
        $('td:not(.completed)').css('background', 'orange');
        clickedElements =1;
      }, 1500);
    }
    elementChecker = 0;
  }
  checkForVictory();
})
randomArray();
console.log(mixedElements.length);
});
