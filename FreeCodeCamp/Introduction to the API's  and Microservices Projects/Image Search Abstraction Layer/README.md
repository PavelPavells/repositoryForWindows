Image-Search-Abstraction-Layer
Image Search Abstraction Layer for FreeCodeCamps API Projects

User Stories
I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
I can paginate through the responses by adding a ?offset=2 parameter to the URL.
I can get a list of the most recently submitted search strings.
How to search for images:
.../api/imagesearch/<searchTerm>[?offset=<nr>]
Output:
An array containing 10 objects. Each object represents an image.
If you use the offset-parameter with a nr n. The first image in the array will be the nth search result.
An example object:

{
    snippet:  "freeCodeCamp",
    imageURL: "https://avatars0.githubusercontent.com/...",
    siteURL:  "https://github.com/FreeCodeCamp",
    thumbnail:"https://encrypted-tbn0.gstatic.com/images?..."
}
How to get the most recent searches:
.../api/latest/imagesearch
Output:
An array containing the last 10 searches (as objects). An example object:

{
    term:      "freecodecamp",
    date:      "Mon, 30 Jan 2017 11:59:28 GMT",
    timestamp:  1485777568
}