Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
Tel: 031-772 8332
Mail: info(at)ctk(dot)se
------------------------------------------------------------------------

The DatE-IT digital catalog is built with AngularJS and the project is 
structured in two main modules.

These are dateitse.catalog and dateitse.company.
 
dateitse.catalog can be found in the /browse folder where every file is 
associated with the catalog browser.
 
dateitse.company can be found in the /company folder and every file here
 is associated with the company details view.

#Root
In the root catalog folder you'll find the CSS, main HTML file, main 
AngularJS app file (dateitse-catalog.js) in addition to the company factory.

The CSS is self explanatory, but the HTML file is very similar to the 
original index.html file except for the main content part where the 
AngularJS app populates the views in <ui-view>.

In dateitse-catalog.js you'll find the setup of the app, it's initial 
routing and also the main controller which is run for both the browser
and the company details page. This controller keeps a reference to 
the fetched companies.
 
The companies are fetched by the dateitse-company.factory.js through a 
HTTP GET request to the file in /data called companies.json.

This route can easily later on be replaced by a backend call that 
fetches the companies from a database instead.

#Browse

#Company
