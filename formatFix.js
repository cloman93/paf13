var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i

	sites.forEach(function(s) {
		var print = s.match(pattern)[0];
		s = "*://*." + print + "/*";
		console.log(s);
		});
	
