var watch = (function () {
    var timer = document.getElementById("timer");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var time = "00:00:00.00";
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var t;
    var milliseconds = 0;

    timer.textContent = time;

    function buildTimer () {
        milliseconds++;
        if(milliseconds > 99) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    milliseconds = 0;
                    minutes = 0;
                    seconds = 0;
                    hours++;
                    if (hours >= 99) {
                        milliseconds = 0;
                        seconds = 0;
                        minutes = 0;
                        hours = 0;
                    }
                }
            }   
        }      

        timer.textContent = (hours < 10 ? "0" + hours.toString(): hours) + ":" + (minutes < 10 ? "0" + minutes.toString(): minutes) + ":" + (seconds < 10 ? "0" + seconds.toString(): seconds) + "." + (milliseconds < 10 ? "0" + milliseconds.toString(): milliseconds);
        
    }

    window.onload = function() {
        document.getElementById("start").focus();
    };
    
    function stopTimer () {
        stop.addEventListener("click", function () {
            clearTimeout(t);
            if(document.getElementById("stop") == document.activeElement)
            {
                document.getElementById("start").focus();
            }
        })
    }

    document.body.onkeyup = function(e){
        if(e.keyCode == 32 || e.keyCode == 13){
            //spacebar or enter clicks focused element
            try {
                doc.activeElement.click();
            }
            catch (e) {
                console.log(e);
            }            
        }
    };

    

    function startTimer () {
        start.addEventListener("click", function () {
            clearTimeout(t);
            t = setInterval(buildTimer, 10);

            if(document.getElementById("start") == document.activeElement)
            {
                document.getElementById("stop").focus();
            }
    
        });
    }

    function resetTimer () {
        reset.addEventListener("click", function () {
            timer.textContent = time;
            seconds = 0; minutes = 0; hours = 0; milliseconds = 0;

            if(document.getElementById("reset") == document.activeElement)
            {
                document.getElementById("start").focus();
            }
        });
    }

    return {
        start: startTimer(),
        stop: stopTimer(),
        reset: resetTimer()        
    };

}) ()