Prism.languages.pcr = {
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'number': /\b\d+(?:\.\d+)?/,
	'builtin': /\b(?:ip.geoip.asnum|http.cookie|ip.geoip.country|http.host|ip.src|http.referer|http.request.method|http.request.full_uri|http.request.uri.path|http.user_agent|polaris.threat_score)\b/,
	'operator': {
		pattern: /(^|[^&])\b(?:and|contains|eq|ge|gt|in|le|lt|matches|ne|not|or)\b/,
		lookbehind: true
	},
	'punctuation': /[()\[\],]/,
};
