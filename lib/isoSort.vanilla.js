var log = function() {};
var isoSort 	= function(str1, str2) {
	var args 		= [ arguments[0], arguments[1] ],
		flipped 	= false;
	// str1.length has to be smaller than str2.length
	if( str1.length > str2.length ) {
		// so we flip if str1.length is greater
		// and flip the return value as well
		// depending on the switch-var 'flipped'
		var temp 	= str1;
		str1 		= str2;
		str2 		= temp;
		flipped 	= true;
	}
	for ( var i = 0; i < str1.length; i++ ) {
		chars = [str1.charCodeAt( i ), str2.charCodeAt( i )];
		// change enity-charCodes to faked half steps of their root letters
		for ( var j = 0; j < chars.length; j++ ) {
			if ( chars[j] == 228 ) chars[j] = 97.5; 	// ä => a.5
			if ( chars[j] == 196 ) chars[j] = 65.5; 	// Ä => A.5
			if ( chars[j] == 252 ) chars[j] = 117.5; 	// ü => u.5
			if ( chars[j] == 220 ) chars[j] = 85.5; 	// Ü => U.5
			if ( chars[j] == 246 ) chars[j] = 111.5; 	// ö => o.5
			if ( chars[j] == 214 ) chars[j] = 79.5; 	// O => O.5
		} // ENDFOR (j)

		// SORT
		if ( chars[0] > chars[1] ) {
			log( args[0] + ' comes AFTER '+args[1]);
			return !flipped? 1 : -1;
		} else if ( chars[0] == chars[1] ) {
			ret = 0;
		// ZERO ! chars are equal!
		// return now ...
		// ... or continue to check the other chars

			// if its the last char of str1
			if ( i == str1.length-1 ) {
				// and if string length is equal to str2 ...
				if (str1.length === str2.length) {
					// strings are equal
					log( args[0] + ' is EQUAL with '+args[1]);
					return 0;
				} else {
					// str2.length is greater than str1.length
					// because we check the length on the beginning of the function
					log( args[0] + ' comes BEFORE '+args[1]);
					return !flipped? -1 : 1;
				}
			}
			// "else" -> continue the for loop
		} else {
			log( args[0] + ' comes BEFORE '+args[1]);
			return !flipped? -1 : 1;
		}
	} // ENDFOR (i)
};