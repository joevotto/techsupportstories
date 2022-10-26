var pollfishConfig = 
{
  api_key: "fab8fdcd-6697-4749-b802-d697e79534f3",
  user_id: "user_id_here",
  debug: true,
  offerwall: false,
  request_uuid: "string_uuid",
  ready: customReady, // Set the ready function to prevent autostarting the survey panel
  closeCallback: customSurveyClosed,
  userNotEligibleCallback: customUserNotEligible,
  closeAndNoShowCallback: customCloseAndNoShow,
  surveyCompletedCallback: customSurveyFinished,
  surveyAvailable: customSurveyAvailable,
  surveyNotAvailable: customSurveyNotAvailable,
  user: {
    gender: 0, // Zero is only used as an example, it is not a valid value for this key. Please refer to our documentation.
    year_of_birth: 0,
    marital_status: 0,
    parental: 0,
    education: 0,
    employment: 0,
    career: 0,
    race: 0,
    income: 0,
    organization_role: 0,
    number_of_employees: 0,
    spoken_languages: [0],
    postal_data: "10017|US",
  },
};

function customReady(){}

function customSurveyClosed(){
  console.log("user closed the survey");
}

function customUserNotEligible(){
  console.log("user is not eligible");
}

function customSurveyFinished(data){
  console.log(`
    pollfish survey has finished with revenue: ${data.survey_price},
    survey_loi: ${data.survey_loi},
    survey_ir: ${data.survey_ir},
    survey_class: ${data.survey_class},
    reward_name: ${data.reward_name},
    reward_value: ${data.reward_value},
  `);

  // remove the button
  var button = document.getElementById("unlock-feature-button");
  button.parentNode.removeChild(button);
  alert("Feature unlocked");
}

function customCloseAndNoShow(){
  console.log("close and hide the pollfish panel");
}

function customSurveyAvailable(data){
  console.log(`
    pollfish survey is available with revenue: ${data.revenue},
    survey format playful: ${data.playful},
    survey_loi: ${data.survey_loi},
    survey_ir: ${data.survey_ir},
    survey_class: ${data.survey_class},
    reward_name: ${data.reward_name},
    reward_value: ${data.reward_value},
    remaining_completes: ${data.remaining_completes},
  `);

  // You can show a button in your UI with a reward
  var button = document.createElement('button');
  button.id = "unlock-feature-button"
  button.innerHTML = "Unlock feature";
  document.body.appendChild(button);

  // when the user clicks on the button show the pollfish view 
  button.addEventListener("click", function() {
    Pollfish.showFullSurvey();
  });
}

function customSurveyNotAvailable(){
  console.log("survey not available");
}