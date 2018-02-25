var name = "Chelsea Schaefer";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Chelsea Schaefer",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "508-797-2424",
		"email" : "chelseajoyschaefer@gmail.com",
		"github" : "chelsea2point0",
		"twitter" : "@chels_schaefer",
		"location" : "795 Elm St, Manchester, NH"
	},
	"welcomeMessage" : "Thank you for visiting my resume. I look forward to speaking with you soon.",
	"skills" : [
		"HTML/CSS", "JavaScript", "jQuery", "PHP", "Wordpress", "Git", "AWS", "Google Analytics", "SEO"
		],
	"bioPic" : "images/madone.jpg"
};

var education = {
	"schools": [
	{
		"name": "Nashua Community College",
		"city": "Nashua, NH",
		"degree": "Certificate",
		"major": "Internet Application Development",
		"dates": "August 2015 - December 2015",
		"url": "http://www.nashuacc.edu",
		"location": "505 Amherst St, Nashua, NH"
	},
	{
		"name": "Assumption College",
		"city": "Worcester, MA",
		"degree": "Master of Arts",
		"major": "School Counseling",
		"dates": "September 2010 - May 2012",
		"url": "http://www.assumption.edu",
		"location": "500 Salisbury St, Worcester, MA"
	},
	{
		"name": "University of New Hampshire",
		"city": "Durham, NH",
		"degree": "Bachelor of Arts",
		"major": "Psychology",
		"dates": "September 2006 - May 2010",
		"url": "http://www.unh.edu",
		"location": "105 Main St, Durham, NH"
	}
	]
};

var work = {
	"jobs": [
	{
		"employer": "Cynosure, Inc.",
		"title": "Web Developer",
		"dates": "January 2018 - Present",
		"location": "Carlisle Rd, Westford, MA",
		"description": "Build and maintain multiple websites and web applications that propel digital marketing initiatives in the US and international markets. Track, interpret, and present website analytics to stakeholders to drive continuous improvements to the user experience and increase conversion rates."
	},
	{
		"employer": "Cynosure, Inc.",
		"title": "Junior Web Developer",
		"dates": "January 2016 - January 2018",
		"location": "Carlisle Rd, Westford, MA",
		"description": "Maintain Corporate website as well as 50+ microsites, both domestic and international. Develop and maintain custom Wordpress Plugins and Themes. Deploy full-stack web apps."
	},
	{
		"employer": "Southern New Hampshire University",
		"title": "Lead Training Manager",
		"dates": "September 2014 - June 2015",
		"location": "South Commercial St, Manchester, NH",
		"description": "Responsible for managing a team of 5 Training Managers and 1 Quality Assurance Manager for the Academic Advising staff. Designed, developed, and updated training manuals and job aids for both new and current Academic Advisors."
	},
	{
		"employer": "Southern New Hampshire University",
		"title": "Training Manager",
		"dates": "July 2013 - August 2014",
		"location": "South Commercial St, Manchester, NH",
		"description": "Responsible for design and delivery of onboarding training to all Academic Advising staff. Collaborated with leadership team to ensure that training topics and methods aligned with department goals. Also maintained training materials and created training videos."
	},
	{
		"employer": "Southern New Hampshire University",
		"title": "Academic Advisor",
		"dates": "June 2012 - July 2013",
		"location": "South Commercial St, Manchester, NH",
		"description": "Provided Academic Advising services to new students within Liberal Arts undergraduate degree programs. Recommended and registered students for courses based upon degree requirements. Assisted with study skills and connecting students with academic resources for success."
	}
	]
};

var projects = {
	"samples": [
    	{
    		"title": "New Hampshire Websites - Wordpress",
    		"dates": "August 2017",
    		"description": "Wordpress site with custom theme using Bootstrap Sass",
            "url": "https://github.com/chelsea2point0/nhwebsites"
    	},
    	{
    		"title": "Bridal Website - Wordpress",
    		"dates": "June 2016",
    		"description": "Wordpress site for wedding announcement and details",
            "url": "https://github.com/chelsea2point0/bridal"
    	},
    	{
    		"title": "Invoice Manager",
    		"dates": "October 2015",
    		"description": "Project from JavaScript course at Nashua Community College. Invoice generated using HTML form and JavaScript",
            "url": "https://github.com/chelsea2point0/InvoiceManager"
    	},
    	{
    		"title": "Task Master",
    		"dates": "August 2015",
    		"description": "This website allows users to add and remove items to a task list.",
            "url": "https://github.com/chelsea2point0/TaskMaster"
    	}

	]

};

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);


function displayContacts() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
};

displayContacts();

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i=0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
};

function displayEducation() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

	$(".education-entry:last").append(formattedSchoolNameDegree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedSchoolCity);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedSchoolMajor);
	/*
	var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
	$(".education-entry:last").append(formattedSchoolUrl);
	*/
}
}

displayEducation();

function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName() {
	var nameArray = [];
	nameArray = name.trim().split(" ");
	console.log(nameArray);
	nameArray[1] = nameArray[1].toUpperCase();
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

	return nameArray[0] +" "+ nameArray[1];
}

$("#main").append(internationalizeButton);


projects.display = function() {
	for (project in projects.samples) {
	$("#projects").append(HTMLprojectStart);

    var formattedProjectUrl = HTMLprojectUrl.replace("%data%", projects.samples[project].url);
    $(".project-entry:last").append(formattedProjectUrl);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.samples[project].title);
	$(".project-url:last").html(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.samples[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.samples[project].description);
	$(".project-entry:last").append(formattedProjectDescription);

	}
};

projects.display();

// map
$("#map-div").append(googleMap);
