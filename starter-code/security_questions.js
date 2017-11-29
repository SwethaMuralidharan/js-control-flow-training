console.log("security_questions.js loaded");
var securityQuestions=[{
                          question: "What was your first pet's name?",
                          expectedAnswer: "FlufferNutter"
                        },
                        {
                          question: "What was your childhood's friend name?",
                          expectedAnswer: "Jai"
                        },
                        {
                          question: "What was color  of your first car ?",
                          expectedAnswer: "Black"
                        }
                      ];
var userInput;
for(var i=0;i<securityQuestions.length;i++)
{
  userInput=window.prompt(securityQuestions[i].question);
  if(userInput!=securityQuestions[i].expectedAnswer){
    alert("Incorrect Answer");
    break;
  }

}
