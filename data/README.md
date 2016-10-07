Developed by Chalmers Teknologkonsulter (CTK) for DatE-IT in 2016
Tel: 031-772 8332
Mail: info(at)ctk(dot)se


The file named companies.json contains the data about all attending companies. It is an array of objects, where each object makes up a company.
Please use the following template when adding more companies:

    {
        "name": "Company Name",
        "businessField": "Company Business Field",
        "employees": "Number of employees",
        "website": "Website URL",
        "contact": "Contact information. For formatting, please use HTML such as <p>-tags",
        "description": "A string containing the entire description of the company. For formatting, please use HTML such as <p>-tags",
        "sections": [
          "E",
          "D",
          "IT"
        ],
        "positions": [
          "MSc Thesis",
          "Part-time job"
        ],
        "smallImage": "The small image to display for the company",
        "largeImage": "The large image to display for the company",
        "location": "An URL to the image displaying the location in the EDIT-building"
    }
    
For the sections and positions array, it is of important that the entries match exactly as the search function looks for the exact string (case sensitive).

For sections, use any of the following (where applicable):
"E", "D" or "IT"

For positions, use any of the following (where applicable):
"Trainee", "MSc Thesis", "Internship", "Summer job", "Part-time job" or "Full-time job"
 
These are the currently available values for sections and positions. If you'd like to add more, the search function will need some modification as well. 

Make sure that each company object is separated with a comma (,) such as:

<!-- companies.json -->
    [ 
        { ... },
        { ... },
        { ... } 
    ]

