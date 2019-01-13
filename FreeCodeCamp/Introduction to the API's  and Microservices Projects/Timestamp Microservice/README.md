Timestamp-Microservice
Timestamp Microservice for FreeCodeCamps API-Projects

User Stories
I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
If it does, it returns both the Unix timestamp and the natural language form of that date.
If it does not contain a date or Unix timestamp, it returns null for those properties.
How to use it:
You can use a natural language date matching one of the following formats:

.../2016-12-02
.../02-12-2016
.../December 2, 2016
.../December 2 2016
.../Dec 2, 2016
.../Dec 2 2016
.../2 December 2016
.../2 December 16
.../2 Dec 2016
.../2 Dec 16
Or a Unix-Timestamp:

.../1480636800
Output:
{
    unix: 1480636800,
    natural: "December 2, 2016"
}