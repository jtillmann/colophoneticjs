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