$(document).ready(function () {
    const buttonSlider = $('.button-slider');
    const headSlider = $('.head-slider');
    const allComponent = $('.all-component');
    const screenCalculator = $('.screen-calculator');
    const bodyCalculator = $('.body-calculator');
    const bodyAll = $('.body-all');
    const button = $('.button')
    const equalButton = $('.equal-btn');
    const resetButton = $('.reset-btn');
    const deleteButton = $('.delete-btn');
    const calcTitle = $('.calc-title');
    const themeTitle = $('.theme-title');
    const numberLabel = $('.number-labels');
    const buttonHover =$('.button:hover');
    const resetHover = $('.reset-btn:hover');
    const deleteHover = $('.delete-btn:hover');

    let currentPosition = 0;

    const sliderWidth = headSlider.width();
    const positionWidth = sliderWidth / 3;

    buttonSlider.click(function () {
        currentPosition = (currentPosition + 1) % 3;

        // Use jQuery's animate function for a smoother transition
        buttonSlider.animate({
            left: `${currentPosition * positionWidth}px`
        }, 500); 

        // Update background colors based on position
        console.log(equalButton, '<<<<< curr')
        console.log(button, '<<<<< button')

        switch (currentPosition) {
            case 0:
                allComponent.css('backgroundColor', '#3b4664');
                numberLabel.css('color','#e1e8fa');
                themeTitle.css('color','#fcffff');
                calcTitle.css('color','#fcffff');
                screenCalculator.css('backgroundColor', '#181f32');
                bodyCalculator.css('backgroundColor', '#252d44');
                bodyAll.css('backgroundColor', '#3b4664');
                // buttonHover.css('backgroundColosssr', '#ffffff');
                button.css({
                    'background-color': '#eae3db',  // desired background color
                    'color': '#464b5e'              // desired text color
                });
                // resetHover.css('backgroundColor', '#a2b2e3');
                resetButton.css({
                    'background-color': '#647299',  // desired background color
                    'color': '#feffff'              // desired text color
                });
                // deleteHover.css('backgroundColor', '#a2b2e3');
                deleteButton.css({
                    'background-color': '#647299',  // desired background color
                    'color': '#feffff'              // desired text color
                });
                equalButton.css({
                    'background-color': '#d13f30',  // desired background color
                    'color': '#fcffff'              // desired text color
                });
                break;
            case 1:
                allComponent.css('backgroundColor', '#e6e6e6');
                numberLabel.css('color','#3b3b31');
                themeTitle.css('color','#39392f');
                calcTitle.css('color','#39392f');
                screenCalculator.css({
                    'background-color': '#eeeeee',  // desired background color
                    'color': '#313129'              // desired text color
                });
                calcTitle.css('color', '#3a3a2e')
                themeTitle.css('color', '#3a3a2e')
                bodyCalculator.css('backgroundColor', '#d3cdcd');
                bodyAll.css('backgroundColor', '#e6e6e6');
                button.css({
                    'background-color': '#eae3db',  // desired background color
                    'color': '#313129'              // desired text color
                });
                resetButton.css({
                    'background-color': '#388187',  // desired background color
                    'color': '#feffff'              // desired text color
                });
                deleteButton.css({
                    'background-color': '#388187',  // desired background color
                    'color': '#feffff'              // desired text color
                });
                equalButton.css({
                    'background-color': '#c85401',  // desired background color
                    'color': '#fefeff'              // desired text color
                });
                break;
            case 2:
                allComponent.css('backgroundColor', '#17062a');
                numberLabel.css('color','#fde94a');
                themeTitle.css('color','#ffe84f');
                calcTitle.css('color','#ffe84f');
                screenCalculator.css({
                    'background-color': '#1e0836',  // desired background color
                    'color': '#fadf2e'              // desired text color
                });
                bodyCalculator.css('backgroundColor', '#1e0836');
                buttonSlider.css('backgroundColor' , '#c85303');
                bodyAll.css('backgroundColor', '#17062a');
                button.css({
                    'background-color': '#331b4d',  // desired background color
                    'color': '#fee531'              // desired text color
                });
                resetButton.css({
                    'background-color': '#57067c',  // desired background color
                    'color': '#ffffff'              // desired text color
                });
                deleteButton.css({
                    'background-color': '#57067c',  // desired background color
                    'color': '#ffffff'              // desired text color
                });
                equalButton.css({
                    'background-color': '#00decf',  // desired background color
                    'color': '#003532'              // desired text color
                });
                break;
        }
    });
});

