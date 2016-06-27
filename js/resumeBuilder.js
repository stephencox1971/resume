var bio = {
    "name": "Stephen Cox",
    "role": "Web Developer",
    "contacts": {
        mobile: "+61 402 266117",
        email: "stephen_cox@me.com",
        github: "stephencox1971",
        twitter: "@GeekXPirate",
        location: "Perth, WA"
        },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Systems Integration", "Web Development",
        "Systems Administration", "PreMedia"
    ],
    "biopic": "images/stephencox.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedImage = HTMLbioPic.replace( "%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, myLocation);
        $("#header").append(formattedImage, formattedWelcomeMessage);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, myLocation);

        //Iterate through skills and use jQuery append()
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
}

var education = {
    "schools": [{
        "name": "Sheffield Hallam University",
        "location": "Sheffield, UK",
        "degree": "BA(Hons)",
        "majors": ["English Studies"],
        "dates": "1992",
        "url": "https://www.shu.ac.uk"
    }, {
        "name": "Open University",
        "location": "Milton Keynes, UK",
        "degree": "Diploma",
        "majors": ["European Humanities"],
        "dates": "2001",
        "url": "https://www.open.ac.uk"
    }],
    "onlineCourses": [{
        "title": "Front End Developer Nano Degree",
        "school": "Udacity",
        "date": "Present",
        "url": "https://www.udacity.com"
    }, {
        "title": "Introduction to Programming Nano Degree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Network+",
        "school": "Comptia",
        "date": "2005",
        "url": "https://www.comptia.org/"
    }, {
        "title": "A+",
        "school": "Comptia",
        "date": "2004",
        "url": "https://www.comptia.org/"
    }],
        "display": function () {
        //Iterate through Education data and populate with jQuery .append()
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var namedDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(namedDegree);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDates);
            var majorLength = education.schools[i].majors.length;
            if (majorLength > 0) {
                for (var index = 0; index < majorLength; index++) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
                    $(".education-entry:last").append(formattedMajor);
                }
            };
        }
            $("#education").append(HTMLonlineClasses);
        var myOnlineCourses = education.onlineCourses;
        for (var i = 0; i < myOnlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", myOnlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", myOnlineCourses[i].school);
            var namedOnlineSchool = formattedTitle + formattedSchool;
            var formattedDate = HTMLonlineDates.replace("%data%", myOnlineCourses[i].date);
            var formattedURL = HTMLonlineURL.replace("%data%", myOnlineCourses[i].url);

            $(".education-entry:last").append(namedOnlineSchool);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Hogarth Worldwide Ltd",
        "title": "Systems and Workflow Specialist",
        "location": "London, UK",
        "dates": "October 2009 - January 2013",
        "description": "Integrated Hogarth’s Odystar installation with their\
     MIS system via XML to provide data driven PDF workflows for \
        producing advertising and marketing materials. Integrated the \
        system with GMG Color Server and GMG ColorProof to automatically\
         colour manage all work based upon the information on the\
         MIS database. Added additional instances of the above setup\
         as the company expanded, first in WPP owned agencies in\
         London; and later in the USA, Singapore and\
         Germany.Developed numerous scripts utilising Applescript,\
         Bash and open source tools to enable automated directory\
         creation, pdf manipulation and image processing. Managed an\
         installation of Xinet WebNative Digital Asset Management\
         System, serving marketing materials for several blue-chip\
         customers globally. As well as being the first line contact\
         for various software suppliers I regularly attended trade\
         shows and met with potential new suppliers. Recruited and\
         trained a support team to provide first and second line\
         support of the systems I had implemented. Participated in\
         the Project Management and Implementation of Hogarth’s\
         global office expansion. Led a research project, in\
         collaboration with Esko Graphics to replace Hogarth’s\
         existing production setup with the next generation workflow\
         system Automation Engine and integrate it with Hogarth’s\
         systems using SQL. Led a research project to automate the\
         delivery of advertising materials to newspapers and\
         magazines globally by utilising XMP metadata."
    }, {
        "employer": "Esko Artwork",
        "title": "Field Application Engineer",
        "location": "Redditch, UK",
        "dates": "July 2006 to September 2009",
        "description": "Installation and training of Nexus and Odystar\
     workflow systems; Artpro and Neo editors; Enfocus Pitstop PDF tools,\
     including scripting Action Lists; WebCenter web collaboration system;\
     Dynastrip imposition software. Setup and configuration of Windows 2003\
     and OS X servers. Offset Lithographic and Flexographic Screening and\
     Colour Consultancy. Telephone and Sales Support."
    }, {
        "employer": "Kodak Polychrome Graphics",
        "title": "Applications Specialist",
        "location": "Watford, UK",
        "dates": "April 2005 - June 2006",
        "description": "Demonstration, installation, training and support of\
     Kodak Approval proofing system, Matchprint ProofPro Inkjet, Matchprint\
     Virtual soft-proofing system, Realtime Proof web collaboration\
     system. Responsible for day to day customer contact and support of\
     approximately £1 million per annum consumables business."
    }, {
        "employer": "Grosvenor Northampton Ltd",
        "title": "PrePress Systems Manager",
        "location": "Northampton, UK",
        "dates": "January 2001 - March 2005",
        "description": "Systems administration of a mixed Apple Macintosh,\
     Windows NT and Windows 2000 environment, including network support,\
     application support, workstation maintenance and repair, nightly backups,\
     Exchange server support, liaising with consumable, software and hardware\
     vendors. Responsible for all Prepress output in a B2 offset environment,\
     including page makeup, scanning, retouching, pre-flighting, trapping,\
     proofing, imposition. Software - Adobe Photoshop, Adobe Illustrator,\
     Adobe Indesign, Quark Xpress, Microsoft Office, Adobe Acrobat,\
     Enfocus Pitstop, Heidelberg Signastation, Heidelberg Delta RIP,\
     Colorbus proofing RIP. Hardware - Heidelberg Trendsetter and Topsetter\
     CTP, Kodak Approval Proofer, Canon laser copiers, Itek Drum Scanner."
    }, {
        "employer": "Sterling Press Ltd",
        "title": "Scanner/Mac Operator",
        "location": "Wellingborough, UK",
        "dates": "February 1998 - December 2000",
        "description": "Operation of Linotype-Hell Chromagraph Drum Scanner,\
     retouching, page make up, pre-flighting, trapping, proofing (Dupont\
     Cromalin) and  both analogue and CTP plate making. Software -\
     Adobe Photoshop, Adobe Illustrator, Quark Xpress, Heidelberg Linocolor,\
     Heidelberg Signastation. Heidelberg Delta RIP."
    }, {
        "employer": "Alden Multimedia Ltd",
        "title": "PrePress Operator",
        "location": "Northampton, UK",
        "dates": "February 1993 - January 1998",
        "description": "Various roles at a Scientific Typesetter including Flat\
     bed scanning, page make up, image setter operation, illustration\
     (Freehand and Illustrator), camera operation, copy editing and proof\
     reading."
    }],
    "display": function () {
        //Iterate through jobs and use jQuery .append()
        var myWork = work.jobs;
        for (var i = 0; i < myWork.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", myWork[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", myWork[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", myWork[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", myWork[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "May 2016",
        "description": "Portfolio site for Udacity Front End Nanodegree",
        "images": ["images/portfolio1.jpg"],
    }],
    "display": function() {
    for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace(
                "%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedHTMLprojectTitle);
            var formattedHTMLprojectDates = HTMLprojectDates.replace(
                "%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedHTMLprojectDates);
            var formattedHTMLprojectDescription =
                HTMLprojectDescription.replace("%data%", projects.projects[
                    i].description);
            $(".project-entry:last").append(
                formattedHTMLprojectDescription);
            if (projects.projects[i].images.length > 0) {
                for (image in projects.projects[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
            $(".project-entry:last").append(formattedImage);
                }
            }
        };
    }
}


// Click feedback for analytics
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//Function to collect locations for Google Maps
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

//Function to drive internationalize button
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//Call Display functions
bio.display();
work.display();
education.display();
projects.display();
