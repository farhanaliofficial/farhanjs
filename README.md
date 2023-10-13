# FarhanJS JavaScript Library v1.0.0

**Created on:** 16/09/2023 03:33 PM in Pakistan
**Written by:** Farhan Ali (16 years old)

## Description

The Farhan JavaScript Library is a versatile utility library that provides various string and data manipulation functions. It simplifies tasks like binary and hexadecimal conversion, base64 encoding/decoding, URL encoding/decoding, and random value generation. This library is designed to be easy to use and understand.

## Usage

To use this library in your project, you can include it via a CDN like jsDelivr. Simply add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/farhanaliofficial/farhanjs@main/farhan.js"></script>
```

## License

This library is released under the MIT License. See the LICENSE file for details.

## Contributions

Contributions and feedback are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Class Structure

The library includes the following class:

### Farhan

- `ord(c)`: Get the Unicode code point of a character.
- `chr(v)`: Get the character from a Unicode code point.
- `bin(b, p=8)`: Convert a number to binary with optional padding.
- `hex(a)`: Convert a number to hexadecimal.
- `str2bin(text)`: Convert a string to a binary representation.
- `bin2str(text)`: Convert a binary string to its original string.
- `str2hex(text)`: Convert a string to a hexadecimal representation.
- `hex2str(text)`: Convert a hexadecimal string to its original string.
- `base64encode(text)`: Encode a string to Base64.
- `base64decode(text)`: Decode a Base64 string to its original string.
- `urlsafe_b64encode(text)`: Encode a string to URL-safe Base64.
- `urlsafe_b64decode(text)`: Decode a URL-safe Base64 string.
- `urlencode(url)`: URL-encode a string.
- `urldecode(url)`: URL-decode a string.
- `random_int(min, max)`: Generate a random integer within a specified range.
- `random_char(min, max)`: Generate a random character within a specified range.
- `random_choice(array)`: Choose a random element from an array or string.
- `random_hexstr(len=20)`: Generate a random hexadecimal string of a specified length.
- `validateDW()`: Validate the presence of the document and window objects (for use with copy method).
- `copy(textE)`: Copy text to the clipboard (requires document and window objects).
- `_(q)`: Select an element using a query selector (requires document and window objects).

## Error Handling

The library includes a custom error class `FarhanError` to handle exceptions.

```javascript
class FarhanError extends Error {
	constructor(msg) {
		super(msg);
		this.name = "FarhanError";
	}
}
```

Feel free to explore and utilize the FarhanJS JavaScript Library for your projects!
