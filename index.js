"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

jQuery(document).ready(function($){
    let heightObj = $("#height");
    let weightObj = $("#weight");

    let calculateBmi = function() {
        let height = parseFloat($(heightObj).val().replace(",", "."));
        let weight = parseFloat($(weightObj).val());
        
        let bmi = (weight / (height * height));
        let result = Math.round(bmi * 10) / 10;

        let resultObj = $("#result").text(("" + result).replace(".",","));

        $("#weight-below, #weight-above, #weight-normal").hide();


        if(bmi < 18.5) {
            $("#weight-below").show()
        } else if (bmi > 18.5 && bmi < 25) {
            $("#weight-normal").show();
        } else if(!isNaN(bmi)){
            $("eight-above").show();
        }
    }

    heightObj.change(calculateBmi);
    weightObj.change(calculateBmi);
    heightObj.keyup(calculateBmi);
    weightObj.keyup(calculateBmi);
});




