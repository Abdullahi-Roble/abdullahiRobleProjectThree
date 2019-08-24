
// there are 3 questions, with a maximum of 3 options each 
// each set of options is an array

// const sleepHabits = {

// }

// when an answer for a question is clicked, the answer block is highlighted and smooth scroll to the next fieldset in the form kicks in
// each selected answer is stored in/saved as a variable, with that variable used in the final template literal to display the results of the quiz

$(document).ready(function () {

    const MVPsleepTime = {
        minimal: {
            output: "You're not getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night -- unfortunately, you're getting less than three!"
        },
        average: {
            output: "You're doing a good job of getting enough sleep. The average adult requires at least 4-5 cycles of sleep per night, and you're getting at least four!"
        },
        excellent: {
            output: "You're doing a great job at getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night, and you're getting all that and then some!"
        }
    }

    // const MVPbedTime = {
    //     early: {
    //         output: "You're going to bed at an early time!"
    //     },
    //     good: {
    //         output: "You're going to bed at a good time!"
    //     },
    //     late: {
    //         output: "You're going to bed way too late!"
    //     }
    // }

    // const sleepTime = {
    //     minimal:
    //         {
    //             output: "You're not getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night -- unfortunately, you're getting less than three! You're already going to bed at an early time, so try taking a nap during the day to get the necessary hours you need to be productive!",
    //             bedtime: "8pm - 10pm"
    //         },
    //         {
    //             output: "You're not getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night -- unfortunately, you're getting less than three! You're already going to bed at a good time, so try taking a nap during the day to get the necessary hours you need to be productive. If that doesn't work, you can try an earlier bedtime!",
    //             bedtime: "10pm - Midnight"
    //         },
    //         {
    //             output: "You're not getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night -- unfortunately, you're getting less than three! Try to go to bed earlier, or take a nap during the day to get the necessary hours you need to be productive!",
    //             bedtime: "Beyond Midnight"
    //         }
    //     average:
    //         {
    //             output: "You're doing a good job of getting enough sleep. The average adult requires at least 4-5 cycles of sleep per night, and you're getting at least four! You're already going to bed at an early time, so try taking a nap during the day if you want to boost your sleep!",
    //             bedtime: "8pm - 10pm"
    //         },
    //         {
    //             output: "You're doing a good job of getting enough sleep. The average adult requires at least 4-5 cycles of sleep per night, and you're getting at least four! If you want to boost your sleep, try going to bed a little earlier than normal, or if that doesn't work, try napping during the day.",
    //             bedtime: "10pm - Midnight"
    //         },
    //         {
    //             output: "You're doing a good job of getting enough sleep. The average adult requires at least 4-5 cycles of sleep per night, and you're getting at least four! If you want to boost your sleep, try going to bed a little earlier than normal.",
    //             bedtime: "Beyond Midnight"
    //         },

    //     excellent:
    //         {
    //             output: "You're doing a great job at getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night, and you're getting all that and then some! I gotta ask, though, if you're going to bed so early every day, do you even have a life?",
    //             bedtime: "8pm - 10pm"
    //         },
    //         {
    //             output: "You're doing a great job at getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night, and you're getting all that and then some! Keep up the great work!",
    //             bedtime: "10pm - Midnight"
    //         },
    //         {
    //             output: "Even though you're going to bed at a late time, you're doing a great job at getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night, and you're getting all that and then some! I gotta ask, though, if you're sleeping in late every day, do you even have a job?",
    //             bedtime: "Beyond Midnight"
    //         }   
    // }

    // const startSleep = (sleepy) => {
    //     for (let item in startSleep) {
    //         const sleepChoice = sleepy[item];
    //         $('.sleepResults').append(`<h2>${sleepChoice}</h2>`);
    //     }
    // }

    $('header').on('click', function (event){
        event.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(".sleepQuestions").offset().top

        }, 1000);
        return false;
    })


    $('form').on('submit', function (event) {
        event.preventDefault();

        const bedTime = $('input[name=bedtime]:checked').val();
        const sleepLength = $('input[name=timeSlept]:checked').val();
        const sleepConsist = $('input[name=diligence]:checked').val();
        // console.log(bedTime, sleepLength, sleepConsist);
        console.log(sleepLength);
        console.log(MVPsleepTime[sleepLength].output);

        $(`.sleepResults`).html(`<h3>${MVPsleepTime[sleepLength].output}</h3>`);

        // $(`.sleepResults`).html(`<h3>${MVPbedTime[bedTime].output}</h3>`); 

        $('html, body').stop().animate({
            scrollTop: $(".sleepResults").offset().top

        }, 1000);
        return false;
    })
});




        // when each answer button is clicked 
        // initiate a for loop with if, if else, and else statements (corresponding to each selection accordingly)
        // the if statements determine which variable gets taken to the final array

// when the form submits

   // find user choices

   // select final array based on user selections in a template literal

   // results are displayed at the bottom of the page 








