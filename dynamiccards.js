var cardsData =[ 
    {h1:"Angular Development Course",
p:"Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code that should be composed.",
i : "Reviews"},

{h1:"React Development Course",
p:"Achievers IT React JS Certification Course in Bangalore. We teach you detailed explanations of what is React Js, why we use React Js, What is  JSX, Unidirectional data flow.",
i : "Reviews"},

{h1:"Mean Stack Development Course",
p:"MEAN Stack Front To Back. In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB along with ES6+. ",
i : "Reviews"},

{h1:"Mern Stack Development Course",
p:"MERN Stack Front To Back. In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+. ",
i : "Reviews"}
,
{h1:"Web Development Course",
p:"We are one of the top web training institutes in Bangalore offering advanced web development courses to our students. Students will get Trained from Professional Experts.",
i : "Reviews"},

{h1:"Digital Marketing Course",
p:"The future for digital marketing is promising, and its scope in the upcoming future is that it may replace all other standard forms of marketing soon. ",
i : "Reviews"},

{h1:"React Native Development Course",
p:"React Native has created a lot of excitement in the IT industry because of its cross-platform nature Developers can reuse the code between Android, iOS with minimal effort.",
i : "Reviews"},

{h1:"Ionic Development Course",
p:"In Our course, you will master tips and best practices for Ionic 4 & Ionic 5 that you can immediately implement to build high quality apps.",
i : "Reviews"},

]

newCardData="";

var section = document.querySelector("body");

for(var i=0;i<cardsData.length;i++){
    newCardData+="<section>"
    newCardData+="<div>"
    newCardData+="<h1>" + cardsData[i].h1 + "</h1>"
    newCardData+="</div>"
    newCardData+="<div>"
    newCardData+="<p>"+cardsData[i].p+"</p>"
    newCardData+="<hr/>"
    newCardData+="<i>"+cardsData[i].i+"</i>"
    newCardData+="</div>"
    newCardData+="</section>"
}
section.innerHTML=newCardData