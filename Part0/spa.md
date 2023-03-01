
    participant browser
    participant server

    On submitting the input 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: return HTML document 
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Browser start executin js-code that returns json data from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: JSON file content: [{content: "",date: "2021-06-01T20:05:31.930Z"}, ...]
browser->server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser: favicon.ico
