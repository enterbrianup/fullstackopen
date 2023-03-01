note left of browser:
user open page 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser: 
browser starts 
executing js-code 
that requests JSON 
data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: JSON file content: [{content: "",date: "2021-06-01T20:05:31.930Z"}, ...]
browser->server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser: favicon.ico

note over browser: 
browser executes 
the event handler 
that renders notes 
to display
end note