$(document).ready(function () {

    const MVPsleepLength = {
        minimal: {
            output: "You're not getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night -- unfortunately, you're getting less than three! Do better!"
        },
        average: {
            output: "You're doing a good job of getting enough sleep. The average adult requires at least 4-5 cycles of sleep per night, and you're getting at least four! Nice work!"
        },
        excellent: {
            output: "You're doing a great job at getting enough sleep! The average adult requires at least 4-5 cycles of sleep per night, and you're getting all that and then some! Keep doing what you're doing!"
        }
    }

    const MVPsleepTime = {
        early: {
            output: "You're already going to bed at an early time, so try taking a nap during the day to get the necessary hours you need to be productive!"
        },
        good: {
            output: "You're already going to bed at a good time, so try taking a nap during the day to get the necessary hours you need to be productive. If that doesn't work, you can try an earlier bedtime!"
        },
        late: {
            output: "Since you're going to bed at a late time, why not try to go to bed earlier, take a nap during the day, or even do both, in order to get the necessary hours you need to be productive?"
        }
    }

    $('header').on('click', function (event){
        event.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $('.sleepQuestions').offset().top

        }, 1000);
        return false;
    })

    $('.time').on('dblclick', function () {

        $('html, body').stop().animate({
            scrollTop: $('.hours').offset().top

        }, 1000);
        return false;
    })

    $('.hours').on('dblclick', function () {

        $('html, body').stop().animate({
            scrollTop: $('.consist').offset().top

        }, 1000);
        return false;
    })

    $('.consist').on('dblclick', function () {

        $('html, body').stop().animate({
            scrollTop: $('.finale').offset().top -500

        }, 1000);
        return false;
    })

    $('form').on('submit', function (event) {
        event.preventDefault();

        const bedTime = $('input[name=bedtime]:checked').val();
        const sleepLength = $('input[name=timeSlept]:checked').val();
        const sleepConsist = $('input[name=diligence]:checked').val();

        ($(`.sleepResults`).html(`<h3>${MVPsleepTime[bedTime].output}</h3>`)+
        $(`.sleepResults`).html(`<h3>${MVPsleepLength[sleepLength].output}</h3>`));


        $('html, body').stop().animate({
            scrollTop: $('.sleepResults').offset().top

        }, 2000);
        return false;
    })

    $('.reset').on('click', function (event) {
        event.preventDefault();
        $('input, form').trigger(':reset');

        $('html, body').stop().animate({
            scrollTop: $('#start').offset().top,
            
        }, 1000);
        return false;
    })
});
