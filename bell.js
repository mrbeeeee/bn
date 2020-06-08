audio = new Audio('./img/guitarbell.mp3');

var d = new Date();
var n = d.getDay()
//var n = 69; (Bulldog breakout schedule)
//var n = 70; // (Fri Assembly A)
//var n = 71; // (Coronavirus Remote Teaching Schedule)
var n = 42; // (Summer school schedule)
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

    ///// Monday
    if (n == 1) {
        dayweek = "Monday :("
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex <= 8.45) {
            period = "Period 1"
            bmessage = "Period 1 -  8:00 to 8:45"
            var timel = "8:45:00";
            classis = true;
        } else if (timex >= 8.50 && timex < 9.40) {
            bmessage = "Period 2 -  8:50 to 9:40"
            period = "Period 2"
            var timel = "9:40:00";
            classis = true;
        } else if (timex >= 9.40 && timex < 9.55) {
            bmessage = "Break Time - 9:40 to 9:55"
            period = "Break Time"
            var timel = "9:55:00";
            classis = false;
        } else if (timex >= 9.55 && timex <= 10.40) {
            bmessage = "Period 3 - 9:55 to 10:40"
            period = "Period 3"
            var timel = "10:40:00";
            classis = true;
        } else if (timex >= 10.45 && timex <= 11.30) {
            bmessage = "Period 4 - 10:45 to 11:30"
            period = "Period 4"
            var timel = "11:30:00";
            classis = true;
        } else if (timex >= 11.35 && timex < 12.20) {
            bmessage = "Period 5 (Middle School Lunch) - 11:35 to 12:20"
            period = "Period 5"
            var timel = "12:20:00";
            classis = false;
        } else if (timex >= 12.20 && timex <= 13.05) {
            bmessage = "Period 6 (High School Lunch) - 12:20 to 1:05"
            period = "Period 6"
            var timel = "13:05:00";
            classis = false;
        } else if (timex >= 13.10 && timex <= 13.55) {
            bmessage = "Period 7 - 1:05 to 1:55"
            period = "Period 7"
            var timel = "13:55:00";
            classis = true;
        } else if (timex >= 14.00 && timex < 14.50) {
            bmessage = "Period 8 - 2:00 to 2:50"
            period = "Period 8"
            var timel = "14:50:00";
            classis = true;
        } else if (timex >= 14.50 && timex < 15.15) {
            bmessage = "Tutorial Time - 2:50 to 3:15"
            period = "Tutorial"
            var timel = "15:15:00";
            classis = false;
        } else if (timex >= 15.15 && timex <= 17.00) {
            bmessage = "The library is open until 5:00 PM"
            period = "Have a great rest of your day! Library Closes in..."
            var timel = "17:00:00";
            classis = false;
        } else if (timex >= 17.01 && timex <= 24.59) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
            classis = false;
        } else {
            period = "Get to class!"
            var timel = "1:00:00";
            classis = false;
        }
    };




    ///// Tuesday (Even Block)
    if (n == 2) {
        dayweek = "Tuesday"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex < 9.35) {
            bmessage = "Period 2 - 8:00 to 9:35"
            period = "Block 2"
            var timel = "9:35:00";
            classis = true;
        } else if (timex >= 9.35 && timex < 9.50) {
            bmessage = "Break Time - 9:35 to 9:50"
            period = "Break Time"
            var timel = "9:50:00";
            classis = false;
        } else if (timex >= 9.50 && timex <= 11.20) {
            bmessage = "Period 4 - 9:50 to 11:20"
            period = "Block 4"
            var timel = "11:20:00";
            classis = true;
        } else if (timex >= 11.25 && timex < 12.10) {
            bmessage = "Period 5 - 11:25 to 12:10"
            period = "Block 5"
            var timel = "12:10:00";
            classis = false;
        } else if (timex >= 12.15 && timex <= 13.00) {
            bmessage = "Period 6 - 12:15 to 1:00"
            period = "Block 6"
            var timel = "13:00:00";
            classis = false;
        } else if (timex >= 13.05 && timex < 14.40) {
            bmessage = "Period 8 - 1:05 to 2:40"
            period = "Block 8"
            var timel = "14:40:00";
            classis = true;
        } else if (timex >= 14.40 && timex < 15.15) {
            bmessage = "Tutorial Time - 2:40 to 3:15"
            period = "Tutorial Time"
            var timel = "15:15:00";
            classis = false;
        } else if (timex >= 15.15 && timex <= 17.00) {
            bmessage = "The library is open until 5:00 PM"
            period = "Have a great rest of your day! Library Closes in..."
            var timel = "17:00:00";
            classis = false;
        } else if (timex >= 17.01 && timex <= 24.59) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
            classis = false;
        } else {
            period = "Get to class!"
            var timel = "1:00:00";
            classis = false;
        }
    };


    ///// Wednesday (Odd Block)
    if (n == 3) {
        dayweek = "Wednesday"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex < 9.35) {
            period = "Block 1"
            var timel = "9:35:00";
            classis = true;
        } else if (timex >= 9.35 && timex < 9.50) {
            period = "Break Time"
            var timel = "9:50:00";
            classis = false;
        } else if (timex >= 9.50 && timex <= 11.20) {
            period = "Block 3"
            var timel = "11:20:00";
            classis = true;
        } else if (timex >= 11.25 && timex < 12.10) {
            period = "Block 5"
            var timel = "12:10:00";
            classis = false;
        } else if (timex >= 12.15 && timex <= 13.00) {
            period = "Block 6"
            var timel = "13:00:00";
            classis = false;
        } else if (timex >= 13.00 && timex < 14.35) {
            period = "Block 7"
            var timel = "14:35:00";
            classis = true;
        } else if (timex >= 14.35 && timex <= 17.00) {
            bmessage = "The library is open until 5:00 PM"
            period = "Have a great rest of your day! Library Closes in..."
            var timel = "17:00:00";
            classis = false;
        } else if (timex >= 17.01 && timex <= 24.59) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
            classis = false;
        } else {
            period = "Get to class!"
            var timel = "1:00:00";
            classis = false;
        }
    };




    ///// Thursday
    if (n == 4) {
        dayweek = "Thursday"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex <= 8.45) {
            period = "Period 1"
            bmessage = "Period 1 -  8:00 to 8:45"
            var timel = "8:45:00";
            classis = true;
        } else if (timex >= 8.50 && timex < 9.40) {
            bmessage = "Period 2 -  8:50 to 9:40"
            period = "Period 2"
            var timel = "9:40:00";
            classis = true;
        } else if (timex >= 9.40 && timex < 9.55) {
            bmessage = "Break Time - 9:40 to 9:55"
            period = "Break Time"
            var timel = "9:55:00";
            classis = false;
        } else if (timex >= 9.55 && timex <= 10.40) {
            bmessage = "Period 3 - 9:55 to 10:40"
            period = "Period 3"
            var timel = "10:40:00";
            classis = true;
        } else if (timex >= 10.45 && timex <= 11.30) {
            bmessage = "Period 4 - 10:45 to 11:30"
            period = "Period 4"
            var timel = "11:30:00";
            classis = true;
        } else if (timex >= 11.35 && timex < 12.20) {
            bmessage = "Period 5 (Middle School Lunch) - 11:35 to 12:20"
            period = "Period 5"
            var timel = "12:20:00";
            classis = false;
        } else if (timex >= 12.20 && timex <= 13.05) {
            bmessage = "Period 6 (High School Lunch) - 12:20 to 1:05"
            period = "Period 6"
            var timel = "13:05:00";
            classis = false;
        } else if (timex >= 13.10 && timex <= 13.55) {
            bmessage = "Period 7 - 1:05 to 1:55"
            period = "Period 7"
            var timel = "13:55:00";
            classis = true;
        } else if (timex >= 14.00 && timex < 14.50) {
            bmessage = "Period 8 - 2:00 to 2:50"
            period = "Period 8"
            var timel = "14:50:00";
            classis = true;
        } else if (timex >= 14.50 && timex < 15.15) {
            bmessage = "Tutorial Time - 2:50 to 3:15"
            period = "Tutorial"
            var timel = "15:15:00";
            classis = false;
        } else if (timex >= 15.15 && timex <= 17.00) {
            bmessage = "The library is open until 5:00 PM"
            period = "Have a great rest of your day! Library Closes in..."
            var timel = "17:00:00";
            classis = false;
        } else if (timex >= 17.01 && timex <= 24.59) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
            classis = false;
        } else {
            period = "Get to class!"
            var timel = "1:00:00";
            classis = false;
        }
    };



    ///// Friday
    if (n == 5) {
        (function titleScroller(text) {
            document.title = text;
            console.log(text);
            setTimeout(function() {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 2000);
        }(" Bell Ninja - A CMD Book Creation - IT'S FRIDAY!!! :D"));
        dayweek = "Friday"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
            classis = false;
        } else if (timex >= 8.00 && timex <= 8.45) {
            period = "Period 1"
            bmessage = "Period 1 -  8:00 to 8:45"
            var timel = "8:45:00";
            classis = true;
        } else if (timex >= 8.50 && timex < 9.40) {
            bmessage = "Period 2 -  8:50 to 9:40"
            period = "Period 2"
            var timel = "9:40:00";
            classis = true;
        } else if (timex >= 9.40 && timex < 9.55) {
            bmessage = "Break Time - 9:40 to 9:55"
            period = "Break Time"
            var timel = "9:55:00";
            classis = false;
        } else if (timex >= 9.55 && timex <= 10.40) {
            bmessage = "Period 3 - 9:55 to 10:40"
            period = "Period 3"
            var timel = "10:40:00";
            classis = true;
        } else if (timex >= 10.45 && timex <= 11.30) {
            bmessage = "Period 4 - 10:45 to 11:30"
            period = "Period 4"
            var timel = "11:30:00";
            classis = true;
        } else if (timex >= 11.35 && timex < 12.20) {
            bmessage = "Period 5 (Middle School Lunch) - 11:35 to 12:20"
            period = "Period 5"
            var timel = "12:20:00";
            classis = false;
        } else if (timex >= 12.20 && timex <= 13.05) {
            bmessage = "Period 6 (High School Lunch) - 12:20 to 1:05"
            period = "Period 6"
            var timel = "13:05:00";
            classis = false;
        } else if (timex >= 13.10 && timex <= 13.55) {
            bmessage = "Period 7 - 1:05 to 1:55"
            period = "Period 7"
            var timel = "13:55:00";
            classis = true;
        } else if (timex >= 14.00 && timex < 14.50) {
            bmessage = "Period 8 - 2:00 to 2:50"
            period = "Period 8"
            var timel = "14:50:00";
            classis = true;
        } else if (timex >= 14.50 && timex < 15.15) {
            bmessage = "Tutorial Time - 2:50 to 3:15"
            period = "Tutorial"
            var timel = "15:15:00";
            classis = false;
        } else if (timex >= 15.15 && timex <= 17.00) {
            bmessage = "The library is open until 5:00 PM"
            period = "Have a great rest of your day! Library Closes in..."
            var timel = "17:00:00";
            classis = false;
        } else if (timex >= 17.01 && timex <= 24.59) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
            classis = false;
        } else {
            period = "Get to class!"
            var timel = "1:00:00";
            classis = false;
        }
    };

    if (n == 6) {
        dayweek = "Saturday!"
        period = "Please enjoy your weekend!"
        bmessage = "Enjoy Your Weekend!"
    };

    if (n == 0) {
        dayweek = "Sunday :|"
        period = "Just one more day please......."
        bmessage = "Enjoy Your Weekend!"
    }


    ///// Special Schedule: Breakout Week
    if (n == 69) {
        dayweek = "Special Schedule: Breakout Week"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
        } else if (timex >= 8 && timex <= 8.31) {
            period = "Period 1"
            var timel = "8:36:00";
        } else if (timex >= 8.36 && timex < 9.07) {
            period = "Period 2"
            var timel = "9:07:00";
        } else if (timex >= 9.07 && timex < 9.27) {
            period = "Break Time"
            var timel = "9:27:00";
        } else if (timex >= 9.32 && timex <= 10.03) {
            period = "Period 3"
            var timel = "10:03:00";
        } else if (timex >= 10.08 && timex <= 10.39) {
            period = "Period 4"
            var timel = "10:39:00";
        } else if (timex >= 10.44 && timex <= 11.15) {
            period = "Period 5"
            var timel = "11:15:00";
        } else if (timex >= 11.20 && timex <= 11.51) {
            period = "Period 6"
            var timel = "11:51:00";
        } else if (timex >= 11.56 && timex <= 12.24) {
            period = "Period 7"
            var timel = "12:24:00";
        } else if (timex >= 12.32 && timex <= 13.00) {
            period = "Period 8"
            var timel = "13:00:00";
        } else if (timex >= 13.01 && timex <= 24.00) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
        } else {
            period = "Get to your next class!"
            var timel = "1:00:00";
        }
    };

    ///// Special Schedule: Friday Assembly A
    if (n == 70) {
        dayweek = "Special Schedule: Friday Assembly A"
        //var timex = new Date().getHours();
        if (timex >= 1.00 && timex < 8.00) {
            period = "Good Morning! School Starts in..."
            var timel = "8:00:00";
        } else if (timex >= 8 && timex <= 8.43) {
            period = "Period 1"
            var timel = "8:43:00";
        } else if (timex >= 8.48 && timex < 9.31) {
            period = "Period 2"
            var timel = "9:31:00";
        } else if (timex >= 9.31 && timex < 10.12) {
            period = "Assembly Time - Meet at the cafeteria."
            var timel = "10:12:00";
        } else if (timex >= 10.12 && timex <= 10.55) {
            period = "Period 3"
            var timel = "10:55:00";
        } else if (timex >= 11.00 && timex <= 11.43) {
            period = "Period 4"
            var timel = "11:43:00";
        } else if (timex >= 11.48 && timex <= 12.31) {
            period = "Period 5"
            var timel = "12:31:00";
        } else if (timex >= 12.36 && timex <= 13.19) {
            period = "Period 6"
            var timel = "13:19:00";
        } else if (timex >= 13.14 && timex <= 14.07) {
            period = "Period 7"
            var timel = "14:07:00";
        } else if (timex >= 14.12 && timex < 14.55) {
            period = "Period 8"
            var timel = "14:55:00";
        } else if (timex >= 14.55 && timex <= 15.15) {
            period = "Tutorial Time"
            var timel = "15:15:00";
        } else if (timex > 15.15 && timex <= 24.00) {
            period = "Have a great rest of your day!"
            var timel = "24:00:00";
        } else {
            period = "Get to your next class!"
            var timel = "1:00:00";
        }
    };

        ///// Coronavirus
        if (n == 71) {
            dayweek = "Coronavirus - Remote Teaching Schedule"
            //var timex = new Date().getHours();
            if (timex >= 1.00 && timex < 8.00) {
                period = "Good Morning! School Starts in..."
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
            } else if (timex >= 9.30 && timex < 9.55) {
                bmessage = "Break Time - 9:30 to 9:55"
                period = "Break Time"
                var timel = "9:55:00";
                classis = false;
            } else if (timex >= 9.55 && timex < 10.35) {
                bmessage = "Period 3 - 9:55 to 10:35"
                period = "Period 3"
                var timel = "10:35:00";
                classis = true;
            } else if (timex >= 10.35 && timex < 10.45) {
                period = "Take 10. We're back at 10:45"
                bmessage = "P3 to P4 Intermission -  10:35 to 10:45"
                var timel = "10:45:00";
                classis = false;
            } else if (timex >= 10.45 && timex < 11.25) {
                bmessage = "Period 4 - 10:45 to 11:25"
                period = "Period 4"
                var timel = "11:25:00";
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
                period = "IT'S OVER!!!! HAVE A GREAT SUMMER! :-D"
                var timel = "24:00:00";
                classis = false;
            } else {
                period = "Intermission"
                var timel = "1:00:00";
                classis = false;
            }
        };

        ///// Summer School Schedule
        if (n == 42) {
            dayweek = "Summer School Schedule"
            //var timex = new Date().getHours();
            if (timex >= 1.00 && timex < 8.00) {
                period = "Good Morning! School Starts in..."
                var timel = "8:00:00";
                classis = false;
            } else if (timex >= 8.00 && timex < 8.45) {
                period = "Instruction Session 1/5"
                bmessage = "Period 1 -  8:00 to 8:45"
                var timel = "8:45:00";
                classis = true;
            } else if (timex >= 8.45 && timex < 8.55) {
                period = "Take 10. We're back at 8:55"
                bmessage = "P1 to P2 Intermission -  8:45 to 8:55"
                var timel = "8:55:00";
                classis = false;
            } else if (timex >= 8.55 && timex < 9.40) {
                bmessage = "Period 2 -  8:55 to 9:40"
                period = "Instruction Session 2/5"
                var timel = "9:40:00";
                classis = true;
            } else if (timex >= 9.40 && timex < 10.00) {
                bmessage = "Break Time - 9:40 to 10:00"
                period = "Break Time (20 Minutes)"
                var timel = "10:00:00";
                classis = false;
            } else if (timex >= 10.00 && timex < 10.45) {
                bmessage = "Period 3 - 10:00 to 10:45"
                period = "Instruction Session 3/5"
                var timel = "10:45:00";
                classis = true;
            } else if (timex >= 10.45 && timex < 10.55) {
                period = "Take 10. We're back at 10:55"
                bmessage = "P3 to P4 Intermission -  10:45 to 10:55"
                var timel = "10:55:00";
                classis = false;
            } else if (timex >= 10.55 && timex < 11.40) {
                bmessage = "Period 4 - 10:55 to 11:40"
                period = "Instruction Session 4/5"
                var timel = "11:40:00";
                classis = true;
            } else if (timex >= 11.40 && timex < 12.15) {
                period = "Lunch Break: We're back at 12:15"
                bmessage = "Lunch Break (11:40 12:15 PM)"
                var timel = "12:15:00";
                classis = false;
            } else if (timex >= 12.15 && timex < 13.00) {
                bmessage = "Period 5 - 12:15 to 1:00"
                period = "Instruction Session 5/5"
                var timel = "13:00:00";
                classis = false;
            } else if (timex >= 13.00 && timex <= 24.59) {
                period = "Have a great rest of your day!"
                var timel = "24:00:00";
                classis = false;
            } else {
                period = "Intermission"
                var timel = "1:00:00";
                classis = false;
            }
        };


    document.getElementById("demo").innerHTML = period;
    document.getElementById("demo2").innerHTML = timex;
    document.getElementById("demo3").innerHTML = dayweek;
    document.getElementById("demo4").innerHTML = bmessage;

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

        //play bell if bell rings
        /*
        if (timex == 7.59) {
            playAudio();
            playAudio();
        }
        if (timex == 8.00) {
            playAudio();
        }




        if (timex == 8.40) {
            playAudio();
        }




        if (timex == 8.49) {
            playAudio();
        }
        if (timex == 8.50) {
            playAudio();
        }



        //break starts
        if (timex == 9.30) {
            playAudio();
        }


        //break ends
        if (timex == 9.54) {
            playAudio();
        }
        if (timex == 9.55) {
            playAudio();
        }




        if (timex == 10.35) {
            playAudio();
        }



    
        if (timex == 10.44) {
            playAudio();
        }
        if (timex == 10.45) {
            playAudio();
        }




        if (timex == 11.25) {
            playAudio();
        }



        if (timex == 11.34) {
            playAudio();
        }
        if (timex == 11.35) {
            playAudio();
        }




        if (timex == 12.15) {
            playAudio();
        }



        if (timex == 12.24) {
            playAudio();
        }
        if (timex == 12.25) {
            playAudio();
        }




        if (timex == 13.05) {
            playAudio();
        }



        if (timex == 13.14) {
            playAudio();
        }
        if (timex == 13.15) {
            playAudio();
        }




        if (timex == 13.55) {
            playAudio();
        }



        if (timex == 14.04) {
            playAudio();
        }
        if (timex == 14.05) {
            playAudio();
        }



        
        if (timex == 14.45) {
            playAudio();
        }

        */



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
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

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
initializeClock('clockdiv', deadline);

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
}, timeoutx);

if (accepted()) {

    document.cookie = "audioenabled = True";

}

//break alarm 2

/* if (!isclass) {
var x = document.getElementById("bell"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

timeoutx = finalseconds * 1000;

const start = Date.now();

console.log('Starting 2nd alternate bell countdown for audio');

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis/1000)}, playing bell`);
  playAudio();
}, timeoutx);
}

*/

