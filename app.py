from asyncio.windows_events import NULL
import urllib.request
from html.parser import HTMLParser
from flask import Flask, Response
import sys

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')


# route handles GET requests to https://lite.cnn.com/en
@app.route("/getCNN")
def getCNN():
    contents = urllib.request.urlopen("https://lite.cnn.com/en").read()
    return Response(contents, status=200)


# route handles GET requests to https://cyber.report
@app.route("/getCyberReport")
def getCyberReport():
    contents = urllib.request.urlopen("https://cyber.report").read()
    return Response(contents, status=200)


# route handles GET requests to https://kidl.at
@app.route("/getKIDLAT")
def getKIDLAT():
    contents = urllib.request.urlopen("https://kidl.at").read()
    return Response(contents, status=200)


# route handles GET requests to https://www.cbsnews.com
@app.route("/getCBSNews")
def getCBSNews():
    contents = urllib.request.urlopen("https://www.cbsnews.com").read()
    return Response(contents, status=200)


if __name__ == '__main__':
    # port number can be specified at command line, defaults to port 5000
    port_number = 5000
    if (len(sys.argv) > 1):
        port_number = sys.argv[1]
    app.run(debug = True, port = port_number)
