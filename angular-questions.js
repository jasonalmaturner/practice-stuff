//Is AngularJS a library, framework, plugin or a browser extension?
    Framework
//Why would you choose Angular for front-end web development?
    It allows for the building of single page applications in a relatively easy, compartmentalized way.
//What are the key features of AngularJS?
    Compartmentalized/modular, routes, secure, data-binding, allows for easier transfer between DBs, servers, or hosting-sites.
//Describe the following in an AngularJS context:

//Model
    User manipulates the model, where values are stored on the scope.
//View
    The view is the interface between the user and the app. The DOM. The html.
//Controller
    Where the DOM and the service interface. This is often where data is manipulated before entering or leaving the DOM.
//Service
    Where the controller and the server interface. This is how data is retrieved or sent, usually via http requests.
    Try to keep controllers thin and move as much of your logic to the service, if possible.
//Data Binding
    Data binding is the two-way transfer of data between the view and, ultimately, the database. The data binding occurs
    on the scope between the view and the controller. Data can be sent to and from the view via the scope.
//Directive
    Allows for customization of html components without having to rebuild the same components multiple times.
    Almost everything used in Angular is a directive, such as ng-show, ng-repeat, ng-model, etc.
//What is a scope in AngularJS?
    Scope is where data/properties are stored and accessed between the view and the controller.
//Does Angular use jQuery?
    It uses jQuery lite. It mostly uses it in directives.