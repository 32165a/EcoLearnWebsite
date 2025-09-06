// Realistic Quiz Questions and Options
const quizQuestions = [
    { q: "Which gas is primarily responsible for global warming?", options:["CO2","O2","N2","H2"], answer:"CO2" },
    { q: "Which practice helps reduce waste?", options:["Recycling","Burning","Littering","Ignoring"], answer:"Recycling" },
    { q: "Which energy source is renewable?", options:["Solar","Coal","Oil","Natural Gas"], answer:"Solar" },
    { q: "Which layer of the atmosphere protects us from UV rays?", options:["Ozone","Troposphere","Stratosphere","Mesosphere"], answer:"Ozone" },
    { q: "What helps prevent soil erosion?", options:["Trees","Plastic","Concrete","Smoke"], answer:"Trees" },
    { q: "Which material takes hundreds of years to decompose?", options:["Plastic","Paper","Wood","Cotton"], answer:"Plastic" },
    { q: "Which practice conserves water?", options:["Fix leaks","Leaving taps open","Bathing daily","Wasting water"], answer:"Fix leaks" },
    { q: "Which energy source uses wind?", options:["Wind","Coal","Gas","Nuclear"], answer:"Wind" },
    { q: "What is composting?", options:["Turning organic waste into fertilizer","Burning trash","Dumping in rivers","Using chemicals"], answer:"Turning organic waste into fertilizer" },
    { q: "What term refers to the variety of life on Earth?", options:["Biodiversity","Monoculture","Pollution","Deforestation"], answer:"Biodiversity" },
    { q: "Reducing energy consumption helps prevent?", options:["Climate Change","Ozone Depletion","Deforestation","Recycling"], answer:"Climate Change" },
    { q: "Which is a major cause of global warming?", options:["Greenhouse Gas Emissions","Tree Planting","Rain","Composting"], answer:"Greenhouse Gas Emissions" },
    { q: "Which is a major pollutant of air?", options:["Smoke","Rain","Wind","Sunlight"], answer:"Smoke" },
    { q: "What is sustainability?", options:["Meeting present needs without harming future","Excessive consumption","Littering","Burning fossil fuels"], answer:"Meeting present needs without harming future" },
    { q: "Which activity leads to deforestation?", options:["Logging","Tree Planting","Composting","Cycling"], answer:"Logging" },
    { q: "What covers more than 70% of Earth's surface?", options:["Oceans","Deserts","Forests","Mountains"], answer:"Oceans" },
    { q: "Which is an eco-friendly transport option?", options:["Bicycle","Car","Motorbike","Plane"], answer:"Bicycle" },
    { q: "Greenhouse gases trap?", options:["Heat","Water","Oxygen","Soil"], answer:"Heat" },
    { q: "Which electronics need recycling?", options:["Batteries and phones","Wood","Paper","Clothes"], answer:"Batteries and phones" },
    { q: "Which food type is organic?", options:["Grown without chemicals","Grown with pesticides","Packaged","Frozen"], answer:"Grown without chemicals" },
    { q: "What should you do with household waste?", options:["Segregate and recycle","Dump in river","Burn","Ignore"], answer:"Segregate and recycle" },
    { q: "Which energy source is renewable?", options:["Solar","Coal","Oil","Natural Gas"], answer:"Solar" },
    { q: "What is conservation?", options:["Protecting natural resources","Destroying forests","Polluting water","Littering"], answer:"Protecting natural resources" },
    { q: "Which practice protects nature?", options:["Tree planting","Overfishing","Dumping waste","Deforestation"], answer:"Tree planting" },
    { q: "Which is a consequence of plastic pollution?", options:["Marine life death","Tree growth","Rain increase","Oxygen rise"], answer:"Marine life death" }
];

// Generate Quiz HTML
let quizContainer=document.getElementById('quizList');
quizQuestions.forEach((q,i)=>{
    let div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<h3>Question ${i+1}:</h3><p>${q.q}</p>`;
    q.options.forEach(opt=>{
        let btn=document.createElement('button');
        btn.textContent=opt;
        btn.onclick=()=>answerQuestion(i+1,opt);
        div.appendChild(btn);
    });
    quizContainer.appendChild(div);
});

// Update answer checking
function answerQuestion(questionNumber, answer){
    if(userAnswers[questionNumber-1]===null){
        userAnswers[questionNumber-1]=answer;
        if(quizQuestions[questionNumber-1].answer===answer){
            totalPoints+=5;
            alert(`Correct! +5 points`);
        } else {
            alert(`Wrong answer! Correct answer: ${quizQuestions[questionNumber-1].answer}`);
        }
        updateProfile();
    } else { alert(`You already answered Question ${questionNumber}`); }
}
