
	var show_evt_info={
		tricy_circuit: function(){
			var s = document.querySelector("#modal_header");
			s.innerHTML = "Tricky circuit";
			document.querySelector("#model_body").innerHTML = 
			`A Microcontroller is a compact circuit designed to govern a specific operation in an embedded system. Nowadays microcontrollers are used in automatically controlled products and devices, such as automobile engine control systems, implantable medical devices, remote control controls, office machines appliances and power tools etc.

As the world is progressing towards the automation and robotics, we think it is important that the students should have sound knowledge on how to use microcontroller to build a small workable project. This event is dedicated for wide spreading the idea of automation and robotics to inspire young students to make career in the automation and robotics.


<h3>What is the Ultimate Goal of Tricky Circuit?<h3><br/>
<ol>
<li>	Test the knowledge of students in the world of microcontroller, sensors potentiometer etc. </li>

<li>	Increase the awareness towards robotics and automation.</li>

<li>	Inspire the young students towards the career of automation and robotics.</li>
</ol><br/>
Event Information Overview

Event Title	:	Tricky Circuits
Length	:	8-10 hours max
Proposed Date	:	
No. of Participants	:	20 teams



Event Description


The event involves the design and fabrication of mini application based projects that will be defined in the problem. It will enable the participants to practically understand the use of microcontroller, sensors, potentiometer, dc, servo & stepper motors and instrumentation principles involved in automation and robotics. In this event, the participants will be given any random problem out of 10 problems and participants will be asked to solve that problem that include the use of microcontroller, sensors, potentiometer, dc, servo & stepper motors etc. The participants can register individually or as a team but not more than 4 participant in one team.
 

Event Highlights:

➢	Complete mini project will be made by the participants from the scratch.

➢	Practical knowledge applied in the event that will help participants to take up to B.tech and M.tech projects easily.
➢	A brief introduction about how to use various components.



Event Stages:

✓	Introduction: The introduction will helps the participants to understand how to use various components. The introduction also covers the use and functioning of electronics involved – dc motors, microcontroller, servo motors, sensors etc.

✓	Circuit Design: After introduction, the participants will be given random problems out of 10 standard problems that they have to solve by applying their practical knowledge.

✓	Testing: In this stage, the circuits of participants will be tested if they work as desired or not.

✓	Result: In this stage, the results will be announced and the winner will be awarded with a prize.



Components list:

➢	Dc motor

➢	Arduino Uno or Arduino mega

➢	Servo motor

➢	Sensors

➢	Connecting wires

➢	Stepper motor

➢	12V or 9V Battery

➢	LEDs

➢	USB Cable

➢	Breadboard

➢	Resistor

➢	Potentiometer

➢	Passive Buzzer
 
➢	Button

➢	LCD 16x2

➢	RFID Card

➢	RGB 3 color module

➢	IR Remote

➢	Multimeter


And some other components.

All the above components would be provided during the event to participants but would be taken back at the end. This is being done to reduce the cost of the program and make it affordable for students.
			`;
			btn.click();
		}
	};
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
