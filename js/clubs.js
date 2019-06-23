function getCookie(cookieName){
	c = document.cookie
	cookieIndex = c.indexOf(cookieName+"=")
	c = c.substring(cookieIndex)
	equalsIndex = c.indexOf("=")
	c = c.substring(equalsIndex)
	semiColonIndex = c.indexOf(";")
	if(semiColonIndex == -1) {
		return c.substring(1)
	}
	c = c.substring(1,semiColonIndex)
	return c
}