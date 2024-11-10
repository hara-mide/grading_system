    // HTML Grade Checker
    var userScore = ''
    // Audios
    var songExcellent = new Audio('./Audio/Applause-1-Sound-effect.mp3')
    var songVeryGood = new Audio('./Audio/Applause-1-Sound-effect.mp3');
    var songCredit = new Audio('./Audio/Funke.mp3');
    var songPassD = new Audio('./Audio/make-god-no-allow-dem.mp3');
    var songPassE = new Audio('./Audio/You-dey-use-your-next-generation-to-play-sound-effect.mp3');
    var songFail = new Audio('./Audio/Shey-na-eyes-dey-pain-me-abi-wetin-be-this-comedy-sound-effect.mp3');
    var songInvalid = new Audio('./Audio/Wrong-Answer.mp3');
    
    function gradeChecker() {
        if (score.value =='') {
            showResults.value = 'Invalid input your score';
            songInvalid.play();
        } else{
            // To change strings to number 
            var userScore = Number(score.value) 
            if (userScore >=75 && userScore <= 100) {
                showResults.value = ''
                showResults.value = 'A - Excellent ❤🙌'
                songExcellent.play();
            }
            else if(userScore >=65 && userScore < 75){
                showResults.value = ""
                showResults.value = "Grade B - Very good 👍"
                songVeryGood.play();
                
            }
            else if(userScore >= 50 && userScore < 65){
                showResults.value = ""
                showResults.value = "Grade C - Credit 👌"
                songCredit.play();
                
            }
            else if(userScore >= 45 && userScore < 50){
                showResults.value = ""
                showResults.value = "Grade D - Pass 🤦‍♀️"
                songPassD.play();
                
            }
            else if(userScore >=40 && userScore < 45){
                showResults.value = ""
                showResults.value = "Grade E - Pass 😒"
                songPassE.play();
                
            }
            else if(userScore >= 0 && userScore < 40){
                showResults.value = ""
                showResults.value = "Grade F - Fail 😠"
                songFail.play();
                
            }
            else{
                showResults.value = ""
                showResults.value = "Invalid Score 🤬"
                songInvalid.play();
            }
        }
    }