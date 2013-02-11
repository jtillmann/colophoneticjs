# Colophonetic

A JavaScript-based implementation of the Cologne Phonetics algorithm. It is one of the phonetic algorithms suited for the German language. More information on it can be found on the [German Wikipedia page](http://de.wikipedia.org/wiki/Kölner_Phonetik). Words that sound similar but may be written completely differently are represented by the same numerical sequence.

One example is the popular German name "Meier" which may also be written "Mayr". In Cologne Phonetics, both are represented as 67.

## Usage

The script extends the String object with the `colophonetics()` method.

	// Wikipedia's example:
	var string = "Müller-Lüdenscheidt";
	console.log(string.colophonetics());
	// > 65752682

	// Meier/Mayr example:
	console.log("Meier Mayr".colophonetics());
	// > 67 67

## License

(The MIT License)

Copyright (c) 2011-2013 Jörg Tillmann &lt;colophonetics@joergtillmann.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
