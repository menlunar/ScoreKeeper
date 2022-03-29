
const p1Dislay = document.querySelector('#p1Display');
const p2Dislay = document.querySelector('#p2Display');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameover = false;


p1Button.addEventListener('click', function(){
   
        if (!isGameover) {
            p1Score += 1;
            if (p1Score === winningScore){
               isGameover = true;           
        }
        p1Dislay.textContent = p1Score;   
    }
  
});

    
p2Button.addEventListener('click', function() {
   
    if (!isGameover) {
        p2Score += 1;
        if (p2Score === winningScore){
           isGameover = true;           
        }
    p2Dislay.textContent = p2Score;   
    }
});

resetButton.addEventListener('click', function() {
    isGameover = false;
    p1Score = 0;
    p2Score = 0;  
    p1Dislay.textContent = 0;
    p2Dislay.textContent = 0;

})
