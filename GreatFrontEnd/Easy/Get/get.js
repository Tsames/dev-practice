/*Before the optional chaining operator (?.) existed, it was sometimes troublesome
to access deeply-nested properties in huge JavaScript objects when some of the
intermediate properties might not be present. 


Doing getFirstName(john) works but getFirstName(jane) will error because the name property
doesn't exist for jane.profile.

*/