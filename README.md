# Fetch-News-Articles

A website hosted on localhost that fetches links to articles from four news sources: CNN, Cyber.Report, Kidl.at, and CBS News. The user can choose the news site to view articles from by pressing its respective button and the website will make a request to that news site and display links to the fetched articles.


## Usage

The python file to execute is called **app.py**, which runs a web server on the localhost.

The port is not hard coded, it is taken as a command line argument - the program can be run using the below command:
>py .\app.py [port number]

where **[port number]** is the port you want to run the website on.

There is a route to load the static file with the html, and other routes to handle GET requests to different websites.

The GET methods retrieve data from other websites, displaying headlines with links to the articles' sources on the assignment web page, below the 4 buttons. Each time a button is clicked the content is overrided with new content from the website corresponding the button clicked.

There are 4 different sources that the web page pulls news from - the red, blue, and green buttons make GET requests to websites included in the list from greycoder.com (https://greycoder.com/a-list-of-text-only-new-sites/). The grey button makes a GET request to https://www.cbsnews.com, a lighter weight news website not listed in the greycoder.com article.

Parsing is done in javascript to include mainly article headlines with links, weeding out unnecessary elements such as images to keep the web page light weight.

