(function(){

var publicKeys = [null,
`MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMWyBISJnLZgeSeU6y+eMxlTHdegfxj1
vaNp2PerVDzUvdLlZKazGYIHXb5xduSnRp4HRHU9TMzSyuP5fr9XohcCAwEAAQ==`,
];

var signatureScheme = 'RSASSA-PKCS1-v1_5';
var encryptionType = {name: signatureScheme, hash: {name: "SHA-256"}};

function ensureRequirements () {
	return SpaccDotWeb.requireScript('./forge.min.js', { useCurrentPath: true });
}

async function makeSignedScript (scriptText, keyIndex, pemPrivateKey) {
	return ('1,'
		+ keyIndex + ','
		+ base64ToUrlsafe(arrayBufferToBase64(await signTextMessage(
			scriptText,
			(pemPrivateKey || OcttRuntime.privateKeys[keyIndex])))) + ','
		+ base64ToUrlsafe(btoa(scriptText)));
}

function verifyAndRunScript (scriptCipher) {
	var [reserved, publicKeyIndex, scriptSignature, scriptText, metadata] = scriptCipher.split(',');
	scriptText = atob(base64FromUrlsafe(scriptText));
	scriptSignature = base64ToArrayBuffer(base64FromUrlsafe(scriptSignature));
	verifyTextMessage(scriptText, scriptSignature, ('-----BEGIN PUBLIC KEY-----\n'
			+ publicKeys[publicKeyIndex] + '\n-----END PUBLIC KEY-----'))
		.then(function(verificationResult){
			if (verificationResult) {
				eval(scriptText);
			}
		}).catch(function(err){
			console.error(err);
		});
}

function signTextMessage (messageText, pemPrivateKey) {
	return (new Promise(function(resolve, reject){
		signingKeyFromPrivateKeyPEM(pemPrivateKey)
			.then(function(signingKey){
				crypto.subtle
					.sign({name: signatureScheme}, signingKey, (new TextEncoder().encode(messageText)))
					.then(function(messageSignature){
						resolve(messageSignature);
					});
			}).catch(function(err){
				reject(err);
			});
	}));
}

function verifyTextMessage (messageText, messageSignature, pemPublicKey) {
	return (new Promise(function(resolve, reject){
		verificationKeyFromPublicKeyPEM(pemPublicKey)
			.then(function(verificationKey){
				crypto.subtle.verify(signatureScheme, verificationKey, messageSignature, (new TextEncoder().encode(messageText)))
					.then(function(success){
						(success ? resolve : reject)(success);
					});
			}).catch(function(err){
				reject(err);
			});
	}));
}

function base64ToUrlsafe (unsafe) {
	return unsafe.replace(/\//g, '_').replace(/\+/g, '-');
}

function base64FromUrlsafe (safe) {
	return safe.replace(/_/g, '/').replace(/-/g, '+')
}

function arrayBufferToBase64 (arrayBuffer) {
	return btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
}

function base64ToArrayBuffer (base64) {
	return Uint8Array.from(atob(base64), (function(char){ return char.charCodeAt(0); }));
}

function stringToArrayBuffer (str) {
	var buf = new ArrayBuffer(str.length);
	var bufView = new Uint8Array(buf);
	for (var i=0, strLen=str.length; i<strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

function signingKeyFromPrivateKeyPEM (pemPrivateKey) {
	return crypto.subtle.importKey(
		'pkcs8',
		stringToArrayBuffer(
			forge.asn1.toDer(
				forge.pki.wrapRsaPrivateKey(
					forge.pki.privateKeyToAsn1(
						forge.pki.privateKeyFromPem(pemPrivateKey)))).data),
		encryptionType,
		false,
		["sign"]);
}

function verificationKeyFromPublicKeyPEM (pemPublicKey) {
	return crypto.subtle.importKey(
		'spki',
		stringToArrayBuffer(
			forge.asn1.toDer(
				forge.pki.publicKeyToAsn1(
					forge.pki.publicKeyFromPem(pemPublicKey))).data),
		encryptionType,
		false,
		["verify"]);
}

window.OcttRuntime = { ensureRequirements, verifyAndRunScript, makeSignedScript };

window.addEventListener('load', (function(){
	var scriptCipher = (new URLSearchParams(location.search)).get('octtRuntime');
	if (scriptCipher) {
		ensureRequirements().then(function(){
			verifyAndRunScript(scriptCipher);
		});
	}
}));

})();
