

// Update employvalue when addEmploymentButton is clicked


function twocolumn(){
const headerColorInput = document.getElementById('Header color');
const headerTextColorInput = document.getElementById('Header-Text color');

const headerElement = document.querySelector('.header');

headerColorInput.addEventListener('input', updateHeaderColor);
headerTextColorInput.addEventListener('input', updateHeaderTextColor);

function updateHeaderColor() {
    headerElement.style.backgroundColor = this.value;
}

function updateHeaderTextColor() {
    headerElement.style.color = this.value;
}
const headerInputName = document.getElementById('Name');
const headerInputJobTitle = document.getElementById('Wanted Job Title');

headerInputName.addEventListener('input', updateHeader);
headerInputJobTitle.addEventListener('input', updateHeader);
function updateHeader() {
    const nameValue = headerInputName.value;
    const jobTitleValue = headerInputJobTitle.value;
    
    // Constructing the combined text with job title under the name
    const combinedText = `<div style="font-size: 40px; padding-top: 5px;">${nameValue}<br><span style="font-size: 18px; padding-top: 0;">${(jobTitleValue)}</span></div>`;
    
    headerElement.innerHTML = combinedText;
}
const skillsInput = document.getElementById('Skills');
const skillHeading = document.getElementById('skill');
const skillDescription = document.getElementById('skillDescription');

skillsInput.addEventListener('input', function() {
    skillHeading.innerText = 'SKILLS';
    skillDescription.innerText = this.value;
});
const phoneInput = document.getElementById('Phone');
const phoneValue = document.getElementById('phoneValue');

phoneInput.addEventListener('input', function() {
    phoneValue.textContent = this.value;
});


const mailInput = document.getElementById('E-mail-ID');
// const mailIconContainer = document.getElementById('mailIconContainer');
const mailValue = document.getElementById('mailValue');

mailInput.addEventListener('input', function() {
    mailValue.textContent = this.value;
});


const locationInput = document.getElementById('City');
const locationValue = document.getElementById('locationvalue'); // Corrected ID

locationInput.addEventListener('input', function() {
    locationValue.textContent = this.value;
});

const summaryinput = document.getElementById('Professional-Summary');
const summaryvalue = document.getElementById('summaryvalue');
 summaryinput.addEventListener('input',function(){
    summaryvalue.textContent = this.value;
 });
 const employmentDiv = document.querySelector('.Employment');
 const addEmploymentButton = document.getElementById('addEmploymentButton');
 const employvalue = document.getElementById('employvalue');
//  const employmentproDiv = document.getElementById('employmentpro');
 
 addEmploymentButton.addEventListener('click', function() {
     const textArea = document.createElement('textarea');
     textArea.setAttribute('name', 'Employment');
     textArea.setAttribute('placeholder', 'Employment');
     textArea.setAttribute('cols', '52');
     textArea.setAttribute('rows', '5');
     employmentDiv.appendChild(textArea);
     
     // Update employvalue when textarea value changes
     textArea.addEventListener('input', function() {
         employvalue.textContent = textArea.value;
     });
 });
 const projectDiv = document.querySelector('.project');
const addProjectButton = document.getElementById('addprojectButton');
const projectvalue = document.getElementById('projectvalue');

addProjectButton.addEventListener('click', function() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'Project');
    textArea.setAttribute('placeholder', 'Project Details');
    textArea.setAttribute('cols', '52');
    textArea.setAttribute('rows', '5');
    projectDiv.appendChild(textArea);
    
    // Update projectvalue when textarea value changes
    textArea.addEventListener('input', function() {
        projectvalue.textContent = textArea.value;
    });
});

const educationalDiv = document.querySelector('.educational');
const addeducationalButton = document.getElementById('addeducationalButton');
const educationalvalue = document.getElementById('educationvalue');

addeducationalButton.addEventListener('click', function() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'Project');
    textArea.setAttribute('placeholder', 'education Details');
    textArea.setAttribute('cols', '52');
    textArea.setAttribute('rows', '5');
    educationalDiv.appendChild(textArea);
    
    // Update projectvalue when textarea value changes
    textArea.addEventListener('input', function() {
        educationalvalue.textContent = textArea.value;
    });
});


 

const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function () {
    const printContent = document.getElementById('printContent').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
});
 }

twocolumn();



