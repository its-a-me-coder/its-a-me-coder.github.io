const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    //Start the game UI
    const startGame =()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });
    };
    
    const playGame =()=>{
        const optiontype = document.querySelectorAll('.weapons-type button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.weapons img')

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });



        //computer's option
        const computerOptions = ['snake','water','gun'];
        let i = 0;
        optiontype.forEach(option=>{
            option.addEventListener('click',function(){
                const computerNumber = Math.floor(Math.random()* 3);
                const computerChoice = computerOptions[computerNumber];
                //this is where we call compareWeapons to compare player and computer
                setTimeout(()=>{
                    compareWeapons(this.textContent,computerChoice);
                    //update hands
                    playerHand.src =`./img/${this.textContent}.png`;
                    computerHand.src =`./img/${computerChoice}.png`;
                },1300)
                
                
                //animation
                playerHand.style.animation = "shakePlayer 1.3s ease";
                computerHand.style.animation = "shakeComputer 1.3s ease";

                
            });

        });
        
    };
    const updateScore =()=>{
        const playerPoints = document.querySelector('.player-points p');
        const computerPoints = document.querySelector('.computer-points p');
        playerPoints.textContent=pScore;
        computerPoints.textContent=cScore;
    }



    const compareWeapons=(playerChoice,computerChoice)=>{
        //update choose the option screen
        const winner= document.querySelector('.winner');
        //checking for tie
        if(playerChoice===computerChoice){
            winner.textContent= 'It is a tie';
            updateScore();
            return;
        }
        //check for player weapon snake
        if(playerChoice==='snake'){
            if(computerChoice==='water'){
                winner.textContent='player wins';  
                pScore++; 
                updateScore();
                return;
            }
            else{
                winner.textContent='computer wins';
                cScore++;
                updateScore();
                return;  
            }
        }
        //check for player weapon water
        if(playerChoice==='water'){
            if(computerChoice==='gun'){
                winner.textContent='player wins';  
                pScore++;
                updateScore();
                return;
                          
            }
            else{
                winner.textContent='computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for player weapon gun
        if(playerChoice==='gun'){
            if(computerChoice==='snake'){
                winner.textContent='player wins';  
                pScore++;
                updateScore();
                return;          
            }
            else{
                winner.textContent='computer wins';
                cScore++;
                updateScore();
                return;
            }
        }


    }
    
    
    
    
    
    startGame();
    playGame();
};

game();