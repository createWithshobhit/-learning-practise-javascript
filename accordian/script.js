const accordionData = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer: "JavaScript is a versatile programming language primarily used for creating interactive and dynamic web pages."
    },
    {
      id: 2,
      question: "What is an Accordion?",
      answer: "An accordion is a UI element that allows users to toggle between showing and hiding sections of related content."
    },
    {
      id: 3,
      question: "How does an accordion work?",
      answer: "An accordion works by allowing only one panel of content to be visible at a time, collapsing all others when one is expanded."
    },
    {
      id: 4,
      question: "What is HTML?",
      answer: "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications."
    },
    {
      id: 5,
      question: "What is CSS?",
      answer: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML."
    }
  ];

  const accordionContainer = document.getElementById("accordion");
  
function createAccordianData(){
    accordionContainer.innerHTML=accordionData.map(dataItem=>`
        <div class="accordion-item">
        <div class ="accrodion-title"><h2 class="accordion-question">${dataItem.question} </h2>
            <button class="accordion-toggle">Toggle Answer</button></div>
            
            <div class="accordion-answer">${dataItem.answer}</div>
        </div>
    `).join(``);
}


  createAccordianData();
  
  const accordionTitle = document.querySelectorAll(".accordion-item");
  const accordionAnswers = document.querySelectorAll(".accordion-answer");

accordionAnswers.forEach(answer => {
    answer.style.display = 'none'; // Set display to 'none' for each element
});
        

  accordionTitle.forEach(currentItem=>{
    
    currentItem.addEventListener('click',(e)=>{
        
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
            currentItem.querySelector('.accordion-answer').style.display = 'none';
        }else{
            accordionTitle.forEach(otherItem=>otherItem.classList.remove('active'));
            currentItem.classList.add('active');
            currentItem.querySelector('.accordion-answer').style.display = 'block';
        }
        e.stopPropagation(); // to prevent event bubbling to parent elements. This will prevent the accordion from closing when a nested element is clicked.
        e.preventDefault(); // to prevent the default link behavior. This will prevent the page from reloading when a nested element is clicked.

    })
    
  }) 
 // click outside of accordion to close it
  document.addEventListener('click', (e) => {
    if (!accordionContainer.contains(e.target)) {
      accordionTitle.forEach(currentItem => currentItem.classList.remove('active'));
      currentItem.querySelector('.accordion-answer').style.display = 'none';
    }
  });  

   
  
  