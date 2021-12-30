document.addEventListener("DOMContentLoaded", () => {
    
	const ENGLISH = 0;
	const SPANISH = 1;
	const GUARANI = 2;

	const componentList = [];
	
    const aboutList = ["About", "Sobre Nosotros", "Orerehe"];
	componentList.push({'component': document.getElementById("aboutNavComponent"), 'translations': aboutList});

	const creationList = ["Creations", "Creaciones", "Rembiapo"];
	componentList.push({'component': document.getElementById("creationsNavComponent"), 'translations': creationList});
	
	const teamList = ["Team", "Organización", "Ñembohykuepy"];
	componentList.push({'component': document.getElementById("teamNavComponent"), 'translations': teamList});
	
	const languageList = ["Language", "Idiomas", "Ñe'e"];
	componentList.push({'component': document.getElementById("languageNavComponent"), 'translations': languageList});

	const videoTextList = ["Providing Opportunity with Technology", 
						   "Brindar oportunidades a través de la tecnología", 
						   "Romba'apo Rome'ē Hag̃ua Tembiapo Tapichakuerape Tecnología Rupive"];
    componentList.push({'component': document.getElementById("videoTextComponent"), 'translations': videoTextList});

						   
	aboutUsTitleList = ["About PopulisTech", "Sobre PopulisTech", "PopulisTech-rehe"];
	componentList.push({'component': document.getElementById("aboutUsTitleComponent"), 'translations': aboutUsTitleList});

	aboutUsDescriptionList = ["We strive to create opportunity and promote personal growth by developing resources to empower\n" + "individuals. We work in multicultural teams to develop tools as unique as we are and continually\n" + "learn along the way.", 
							  "Creamos oportunidades y promovemos el crecimiento personal para desarrollar recursos que empoderen\n" + "a las personas. Trabajamos en equipos multiculturales para desarrollar herramientas tan únicas como lo somos\n" + "nosotros, aprendiendo continuamente en el camino.", 
							  "Ñame'ēta tempiapo ñaipytyvõ umiva oikatúva oipuru okakuaa porã hag̃ua.\n" + "Ñamba’apota oñondivepa rojapo hag̃ua mba’e ideprovécho, upéicha roikuaaveta rohóvo."];
	componentList.push({'component': document.getElementById("aboutUsDescriptionComponent"), 'translations': aboutUsDescriptionList});
	
	creationsTitleList = ["Our Creations", "Nuestras Creaciones", "Ore Rembiapo"];
	componentList.push({'component': document.getElementById("creationsTitleComponent"), 'translations': creationsTitleList});
		
	creationsQomList = ["2,000+ Words, 100+ audio recordings, 60 teachers, 3 languages, and a groundbreaking achievement\n" + "in the Qom community", 
					    "2,000+ palabras, 100+ grabaciones de audio, 60 profesores, 3 idiomas, y un logro\n" + "revolucionario en la comunidad Qom", 
						"2.000 (Mokõi Su)+ ñe'ē, sa  gravasión ñehenduha, 60 mbo'ehárakuéra,\n" + "3 ñe'ēambuekuéra,ha peteĩ jehupyty tuichaiterei Qom-pe"];
	componentList.push({'component': document.getElementById("creationsQomComponent"), 'translations': creationsQomList});
	
	creationsAyvuList = ["1,000+ words in 3 languages and looking for partners to develop a\n" + "next generation app for one of South America's most spoken indigenous languages.", 
					     "1,000+ palabras en 3 idiomas y buscando socios para desarrollar una aplicación de próxima\n" + "generación para una de las lenguas indígenas más habladas de Sudamérica", 
						 "1.000 (Peteī Su) mbohapy ñe'ēme ha ojeheka ava oñemba'apo haguã aplicación\n" + "pyahu oipuru haguã mitã pyahukuera, ava ñe'ē ojeipuruveva Sudamericape"];
	componentList.push({'component': document.getElementById("creationsAyvuComponent"), 'translations': creationsAyvuList});
	
	teamMemberTitleList = ["The Team", "La Organización", "Ñembohykuepy"];
	componentList.push({'component': document.getElementById("teamMemberTitleComponent"), 'translations': teamMemberTitleList});
	
	teamMemberMarkTitleList = ["Project Manager", "Gerente de Proyectos", "Gerente de Proyectos"];
	componentList.push({'component': document.getElementById("teamMemberMarkTitleComponent"), 'translations': teamMemberMarkTitleList});
	
	teamMemberMarkDescriptionList = ["Peace Corps Volunteer turned Data Scientist\n\nPython, R, SQL, Java, D3.js", 
								 "Voluntario del Peace Corps y Científico de Datos\n\nPython, R, SQL, Java, D3.js", 
								 "Voluntario del Peace Corps y Científico de Datos\n\nPython, R, SQL, Java, D3.js"];
	componentList.push({'component': document.getElementById("teamMemberMarkDescriptionComponent"), 'translations': teamMemberMarkDescriptionList});
	
	teamMemberJohnTitleList = ["Computer Engineer", "Ingeniero Informático", "Ingeniero Informático"];
	componentList.push({'component': document.getElementById("teamMemberJohnTitleComponent"), 'translations': teamMemberJohnTitleList});
	
	teamMemberJohnDescriptionList = ["Computer Engineer turned Social Innovator\n\nJava, C, C++, JavaScript, HTML, CSS, Python", 
									 "Ingeniero Informático e Innovador Social\n\nJava, C, C++, JavaScript, HTML, CSS, Python", 
									 "Ingeniero Informático e Innovador Social\n\nJava, C, C++, JavaScript, HTML, CSS, Python"];
	componentList.push({'component': document.getElementById("teamMemberJohnDescriptionComponent"), 'translations': teamMemberJohnDescriptionList});
	
	contactUsList = ["Contact us", "Contáctanos", "Contáctanos"];
	componentList.push({'component': document.getElementById("contactUsComponent"), 'translations': contactUsList});
	
	function translatePage(lang) {
		for (const comp of componentList) {
			comp.component.innerHTML = comp.translations[lang];
		}
	}
	
	function setLanguage(newLanguage) {
		if (currentLanguage === newLanguage)
			return;
		currentLanguage = newLanguage;
		translatePage(currentLanguage);
	}
	
	let currentLanguage = ENGLISH;
	
	document.getElementById("english-button").addEventListener("click", (event) => {
		event.preventDefault();
		setLanguage(ENGLISH);
	});
	
	document.getElementById("spanish-button").addEventListener("click", (event) => {
		event.preventDefault();
		setLanguage(SPANISH);
	});
	
	document.getElementById("guarani-button").addEventListener("click", (event) => {
		event.preventDefault();
		setLanguage(GUARANI);
	});
});