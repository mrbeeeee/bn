function scheduleA() {
    
    audio = new Audio('./img/guitarbell.mp3');

    var d = new Date();
    var n = d.getDay()
    var n = 2020; // (2020-2021 Weekly Schedule)
    getsch();



    //set the target countdown time
    function getsch() {


        //get current minute, seconds, and hours
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var cminute = today.getMinutes();
        if (cminute < 10) {
            var cminute = "0" + cminute;
        }
        var chour = today.getHours();
        var csecond = today.getSeconds();


        //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
        // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
        var minute = cminute
        var timex = chour + "." + cminute;

    
            ///// Coronavirus 2020-2021 A SCHEDULE
            if (n == 2020) {
                dayweek = "Coronavirus - Remote Teaching Schedule A"
                //var timex = new Date().getHours();
                if (timex >= 1.00 && timex < 8.00) {
                    period = "Early Bird"
                    var timel = "8:00:00";
                    classis = false;
                } else if (timex >= 8.00 && timex < 8.40) {
                    period = "Period 1"
                    bmessage = "Period 1 -  8:00 to 8:40"
                    var timel = "8:40:00";
                    classis = true;
                } else if (timex >= 8.40 && timex < 8.50) {
                    period = "Take 10. We're back at 8:50"
                    bmessage = "P1 to P2 Intermission -  8:40 to 8:50"
                    var timel = "8:50:00";
                    classis = false;
                } else if (timex >= 8.50 && timex < 9.30) {
                    bmessage = "Period 2 -  8:50 to 9:30"
                    period = "Period 2"
                    var timel = "9:30:00";
                    classis = true;
                } else if (timex >= 9.30 && timex < 9.40) {
                    bmessage = "P2 to P3 Intermission -  9:30 to 9:40"
                    period = "Take 10. We're back at 9:40"
                    var timel = "9:40:00";
                    classis = false;
                } else if (timex >= 9.40 && timex < 10.20) {
                    bmessage = "Period 3 - 9:40 to 10:20"
                    period = "Period 3"
                    var timel = "10:20:00";
                    classis = true;
                } else if (timex >= 10.20 && timex < 10.30) {
                    period = "Take 10. We're back at 10:30"
                    bmessage = "P3 to P4 Intermission -  10:20 to 10:30"
                    var timel = "10:30:00";
                    classis = false;
                } else if (timex >= 10.30 && timex < 11.10) {
                    bmessage = "Period 4 - 10:30 to 11:10"
                    period = "Period 4"
                    var timel = "11:10:00";
                    classis = true;
                } else if (timex >= 11.25 && timex < 11.35) {
                    period = "Take 10. We're back at 11:35"
                    bmessage = "P4 to P5 Intermission -  11:25 to 11:35"
                    var timel = "11:35:00";
                    classis = false;
                } else if (timex >= 11.35 && timex < 12.15) {
                    bmessage = "Period 5 (Middle School Lunch) - 11:35 to 12:15"
                    period = "Period 5"
                    var timel = "12:15:00";
                    classis = false;
                } else if (timex >= 12.15 && timex < 12.25) {
                    period = "Take 10. We're back at 12:25"
                    bmessage = "P5 to P6 Intermission -  12:15 to 12:25"
                    var timel = "12:25:00";
                    classis = false;
                } else if (timex >= 12.25 && timex < 13.05) {
                    bmessage = "Period 6 (High School Lunch) - 12:20 to 1:05"
                    period = "Period 6"
                    var timel = "13:05:00";
                    classis = false;
                } else if (timex >= 13.05 && timex < 13.15) {
                    period = "Take 10. We're back at 1:15 PM"
                    bmessage = "P6 to P7 Intermission -  1:05 to 1:15"
                    var timel = "13:15:00";
                    classis = false;
                } else if (timex >= 13.15 && timex < 13.55) {
                    bmessage = "Period 7 - 1:15 PM to 1:55 PM"
                    period = "Period 7"
                    var timel = "13:55:00";
                    classis = true;
                } else if (timex >= 13.55 && timex < 14.05) {
                    period = "Take 10. We're back at 2:05 PM"
                    bmessage = "P7 to P8 Intermission -  1:55 PM to 2:05 PM"
                    var timel = "14:05:00";
                    classis = false;
                } else if (timex >= 14.05 && timex < 14.45) {
                    bmessage = "Period 8 - 2:05 PM to 2:45 PM"
                    period = "Period 8"
                    var timel = "14:45:00";
                    classis = true;
                } else if (timex >= 14.45 && timex <= 24.59) {
                    period = "School Day Ended"
                    var timel = "24:00:00";
                    classis = false;
                } else {
                    period = "Intermission"
                    var timel = "1:00:00";
                    classis = false;
                }
            };

            

        document.getElementById("demo-a").innerHTML = period;
        document.getElementById("demo2-a").innerHTML = timex;
        document.getElementById("demo3-a").innerHTML = dayweek;
        //document.getElementById("demo4-a").innerHTML = bmessage;

        ////////////////
        //var timel = "15:20:00";
        ////////////////

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + ' ' + dd + ', ' + yyyy + ' ';
        var countDownDate = new Date(today + " " + timel).getTime();
        //var countDownDate = new Date(today + " 14:35:20").getTime();
        var x = setInterval;

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);






            //get everythiong again
            //get current minute, seconds, and hours
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
            var cminute = today.getMinutes();
            if (cminute < 10) {
                var cminute = "0" + cminute;
            }
            var chour = today.getHours();
            var csecond = today.getSeconds();
        
        
            //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
            // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
            var minute = cminute;
            var timex = chour + "." + cminute;



        temphour = hours * 60;
        combinedvar = minutes + temphour;
        tempmath = combinedvar * 60;
        nonseconds = temphour + tempmath;
        finalseconds = seconds + nonseconds;
        window.xsec = finalseconds;

    };
    /////////////////// Visuals preperation




    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.daysA');
        var hoursSpan = clock.querySelector('.hoursA');
        var minutesSpan = clock.querySelector('.minutesA');
        var secondsSpan = clock.querySelector('.secondsA');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
            if (t.total <= 0) {
                clearInterval(timeinterval);
                getsch();
            }
        }
        getsch();
        checknull();
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    // Last number is mili seconds
    deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * xsec * 1000);
    initializeClock('clockdiv1', deadline);

    function checknull() {
        if (distance == 0) {
            getsch();
            Program.restart();
            window.location.reload();
        };

    };




    var x = document.getElementById("bell"); 

    function playAudio() { 
    x.play(); 
    } 

    function pauseAudio() { 
    x.pause(); 
    } 

    timeoutx = finalseconds * 1000;

    const start = Date.now();

    console.log('Starting alternate bell countdown for audio');

    setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis/1000)}, playing bell`);
    playAudio();
    window.location.reload();
    getsch();
    Program.restart();
    }, timeoutx);

    if (accepted()) {

        document.cookie = "audioenabled = True";

    }



}