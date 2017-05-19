const login_str = "LOGIN"

//language
const en = {
	head : ['TECH','WORK','CONTACT'],
	main : [
		"Web applications",
		"Mobile applications",
		"Libraries/Plugins",
		"Modern, scalable, maintainable Web Apps with the use of modern tech stack.",
		"Responsive",
		"Responsive Design",
		"Responsive Web Design makes your web page look good on all devices"+
									" (desktops, tablets, and phones).\n"+
									"Resize, hide, shrink, enlarge, or move the content to make it fit"+
									" on any screen",

	]
}
const el = {
	head : ['Τεχνολογια','Εμπειρεια','Επικοινωνια']
}

const workProjects = [
		{
			date : "May 2017",
			name : "Kentro-jeans",
			type : "desktop",
			title : "Web app",
			descr : "E-commerce site for online clothes selling",
			link : "https://kentro-jeans.herokuapp.com",
			lang : ["React/Redux","Node.js","mongoDB"]
		},
		{
			date : "August 2016",
			name : "h2n website",
			type : "desktop",
			title : "Web app",
			descr : "h2n's official website\nh2n GmbH",
			link : "https://h2n.io/",
			lang : ["Phonegap", "React/Redux","SQLite"]
		},
		{
			date : "July 2016",
			name : "react-redux-chart",
			type : "book",
			title : "Npm package",
			descr : "Package for creating charts for react-redux developing.\nnpm Package",
			link : "https://www.npmjs.com/package/react-redux-chart",
			lang : ["Javascript", "React/Redux"]
		},
		{
			date : "May 2016",
			name : "websql-json",
			type : "book",
			title : "Npm package",
			descr : "Web sqlite access library. Communicate with JSON strings.\nnpm Package",
			link : "https://www.npmjs.com/package/websql-json",
			lang : ["Javascript", "SQLite","JSON"]
		},
		{
			date : "April 2016",
			name : "Werner Control",
			type : "phone",
			title : "Mobile app",
			descr : "Mobile app for an h2n client\nh2n GmbH",
			link : "https://play.google.com/store/apps/details?id=com.tele_online.app",
			lang : ["Phonegap", "Backbone.js","SQLite"]
		},
		{
			date : "March 2016",
			name : "ajax-query",
			type : "book",
			title : "Npm package",
			descr : "Ajax library with the use of jQuery for implementing ajax calls.\nnpm Package",
			link : "https://www.npmjs.com/package/ajax-query",
			lang : ["Javascript", "AJAX","jQuery","bower"]
		},
		{
			date : "January 2016",
			name : "h2n Control",
			type : "phone",
			title : "Mobile app",
			descr : "Mobile app for controling h2n devices\nh2n GmbH",
			link : "https://play.google.com/store/apps/details?id=com.home2net.ctrl",
			lang : ["Phonegap", "Backbone JS","SQLite"]
		},
		{
			date : "January 2015",
			name : "EOS Sauna",
			type : "phone",
			title : "Mobile app",
			descr : "Mobile app for controling sauna devices\nh2n GmbH",
			link : "https://play.google.com/store/apps/details?id=de.eos_sauna.sauna_control",
			lang : ["Javascript","HTML","CSS","SQLite"]
		},
		{
			date : "January 2014",
			name : "Joined h2n GmbH",
			type : "building",
			title : "Work",
			descr : "Web Developer\nRegensburg, Germany",
			link : "https://h2n.io/",
			lang : ["Frontend","Mobile","DB","Backend"]
		},
		{
			date : "September 2013",
			name : "MSc in Advanced Internet Applications",
			type : "graduation-cap",
			title : "Education",
			descr : "Heriot-Watt University\nEdinburgh, UK",
			link : "https://www.hw.ac.uk",
			lang : ["Javascript, Huskell, Java"]
		},
		{
			date : "April 2012",
			name : "BSc in Industrial Informatics",
			type : "graduation-cap",
			title : "Education",
			descr : "Kavala Institution of Technology\nKavala, Greece",
			link : "http://iiwm.teikav.edu.gr/iinew/",
			lang : ["C++, Java, SQL"]
		}
	]

export { login_str, en, el, workProjects }