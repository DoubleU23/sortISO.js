var sortISO     = function(str1, str2) {
    var flipped     = 0,
        i, j;
    /* str1.length has to be smaller than str2.length ... */
    if( str1.length > str2.length ) {
    /*  ... so we flip if str1.length is greater
    and flip the return value as well
    depending on the switch-var 'flipped' */
        var temp    = str1;
        str1        = str2;
        str2        = temp;
        flipped     = 1;
    }
    for ( i = 0; i < str1.length; i++ ) {
        chars = [str1.charCodeAt( i ), str2.charCodeAt( i )];
        /* change enity-charCodes to faked half steps of their root letters */
        for ( j = 0; j < chars.length; j++ ) {
            if ( chars[j] == 228 ) chars[j] = 97.5;     /* ä => a.5 */
            if ( chars[j] == 196 ) chars[j] = 65.5;     /* Ä => A.5 */
            if ( chars[j] == 252 ) chars[j] = 117.5;    /* ü => u.5 */
            if ( chars[j] == 220 ) chars[j] = 85.5;     /* Ü => U.5 */
            if ( chars[j] == 246 ) chars[j] = 111.5;    /* ö => o.5 */
            if ( chars[j] == 214 ) chars[j] = 79.5;     /* Ö => O.5 */
        }
        /* SORT */
        if ( chars[0] > chars[1] ) {
            /* str1 comes AFTER str2 */
            return !flipped? 1 : -1;
        } else if ( chars[0] == chars[1] ) {
        /* ZERO ! chars are equal! */
            /* IF its the last char of str1 */
            if ( i == str1.length-1 ) {
                if (str1.length === str2.length) {
                    /* AND if string length is equal to str2 ... */
                    /* => str1 is equal to str2 */
                    return 0;
                } else {
                    /* AND str2.length is greater than str1.length */
                    /* str1 comes BEFORE str2 */
                    /* because we check the length on the beginning of the function */
                    return !flipped? -1 : 1;
                }
            }
            /* ELSE-> continue the for loop */
        } else {
            /* str1 comes BEFORE str2 */
            return !flipped? -1 : 1;
        }
    }
};