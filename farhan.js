/**
 * FarhanJS JavaScript Library v1.0.0
 *
 * Created on 16/09/2023 03:33 PM in Pakistan
 * Written by Farhan Ali (16 years old)
 *
 * Description:
 * The Farhan JavaScript Library is a versatile utility library that provides various
 * string and data manipulation functions. It simplifies tasks like binary and hexadecimal
 * conversion, base64 encoding/decoding, URL encoding/decoding, and random value generation.
 * This library is designed to be easy to use and understand.
 *
 * Usage:
 * To use this library in your project, you can include it via a CDN like jsDelivr.
 * Simply add the following script tag to your HTML file:
 *
 * <script src="https://cdn.jsdelivr.net/gh/farhanaliofficial/farhanjs@main/farhan.js"></script>
 * 
 * Replace 'your-username/your-repo' with your GitHub username and repository name where you've hosted this library.
 *
 * License:
 * This library is released under the MIT License. See the LICENSE file for details.
 *
 * Contributions:
 * Contributions and feedback are welcome! If you find any issues or have suggestions for improvements,
 * please open an issue or submit a pull request.
 */

class FarhanError extends Error{
	constructor(msg){
		super(msg);
		this.name = "FarhanError";
	}
}
class Farhan{
	constructor(){
		this.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		this.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
		this.digits = "0123456789";
		this.ascii_letters = this.ascii_uppercase+this.ascii_lowercase;
		this.ascii_letters_digits = this.ascii_letters+this.digits;
		this.base64_chars = this.ascii_letters_digits+"+/";
		this.hexdigits = this.digits+"abcdefABCDEF";
		this.octdigits = "01234567";
	}
	ord(c){
    	return c.charCodeAt(0);
	}
	chr(v){
    	return String.fromCharCode(v);
	}
	bin(b, p=8){
    	return b.toString(2).padStart(p, '0');
	}
	hex(a){
		return a.toString(16);
	}
	str2bin(text){
		this.validate(text)
		let binTxt = "",
		i = 0;
		for(i=0; i<text.length; i++){
			binTxt += this.bin(this.chr(text.charAt(i)))+' ';
		}
		return binTxt;
	}
	bin2str(text){
		this.validate(text);
		let strTxt = "",
		i = 0,
		binTxt = text.split(" ");
		for(i=0; i<binTxt.length; i++){
			strTxt += this.chr(parseInt(binTxt[i], 2));
		}
		return strTxt;
	}
	str2hex(text){
		this.validate(text);
		let hexStr = "",
		i = 0;
		for(i=0; i<text.length; i++){
			hexStr += this.hex(this.ord(text.charAt(i)));
		}
		return hexStr;
	}
	hex2str(text){
		this.validate(text)
		let str = "",
		i = 0;
		for(i=0; i<text.length; i+=2){
			str += this.chr(parseInt(text.substr(i, 2), 16));
		}
		return str;
	}
	validate(txt){
		if(typeof txt !== "string")
			throw new FarhanError("A String type data is required");
		if(txt.length === 0)
			throw new FarhanError("String should not be empty");
	}
	base64encode(text){
		this.validate(text);
		const charArray = text.split(''),
		binArray = charArray.map((char) => {
			return this.bin(this.ord(char));
		}),
		groups = [];
		let binStr = binArray.join('');
		
		while(binStr.length % 6 !== 0){
			binStr += '0';
		}
		
		for(let i=0; i<binStr.length; i+=6){
			groups.push(binStr.substr(i, 6).padEnd(6, '0'));
		}
		const groups8bit = groups.map((group) => '00'+group),
		b64indices = groups8bit.map((group) => parseInt(group, 2)),
		b64str = b64indices.map((index) => {
			return this.base64_chars[index];
		});
		
		while(b64str.length % 4 !== 0){
			b64str.push('=');
		}

		return b64str.join('');
	}
	base64decode(text){
		this.validate(text);
		if(!/^([A-Za-z0-9+/]+)*(=)?$/.test(text)){
			throw new FarhanError("Input String contains invalid Base64 characters or incorrect padding.");
		}
		text = text.replace(/=/g, '');
		
		const charArray = text.split(''),
		b64indices = charArray.map((char) => {
			return this.base64_chars.indexOf(char);
		}).filter((index) => index >= 0),
		
		binArray = b64indices.map((index) => {
			return this.bin(index, 6);
		}),
		groups = [];
		let binStr = binArray.join('');
		
		while(binStr.length % 8 !== 0){
			binStr += '0';
		}
		
		for(let i=0; i<binStr.length; i+=8){
			groups.push(binStr.substr(i, 8));
		}
		
		const asciiTxt = groups.map((group) => {
			return this.chr(parseInt(group, 2));
		});
		
		return asciiTxt.join('');
	}
	urlsafe_b64encode(text){
		return this.base64encode(text).replace("+","-").replace("/","_").replace("=",".");
	}
	urlsafe_b64decode(text){
		return this.base64decode(text).replace("-","+").replace("_","/").replace(".","=");
	}
	urlencode(url){
		return encodeURIComponent(url);
	}
	urldecode(url){
		return decodeURIComponent(url);
	}
	random_int(min, max){
		if(min > max)
			throw new FarhanError("max value should be greater then min value");
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	random_char(min, max){
		min = this.ord(min);
		max = this.ord(max);
		
		if(min > max)
			throw new FarhanError("max value should be greater then min value");
		return this.chr(this.random_int(min, max));
	}
	random_choice(array){
		let i = this.random_int(0, array.length-1);
		return typeof array === "object" ? array[i] : (typeof array === "string" ? array.charAt(i) : undefined);
	}
	random_hexstr(len=20){
		let str = "",
		i = 0;
		for(i=0; i<len; i++){
			str += this.random_choice(this.hexdigits);
		}
		return str;
	}
}
