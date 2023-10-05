//Every app requires a top-level main() function. This is where execution starts.
void main() {
  //Functions that don't explicitly return a value have the void return type.
  print('Hello World!');
}

//Variables
//Many variables you can declare using var and do not have to explicity define their type.
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};

//This is called type inference
//You can also declare variables with the cosnt and final keywords.