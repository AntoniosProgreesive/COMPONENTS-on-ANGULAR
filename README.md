# COMPONENTS-on-ANGULAR
Thi is an example how to ADD, DELETE Components on Angular

__________________________________________________________

Create an Angular Project:
    After installing the Angular CLI, you can create a new project with the command:

      bash
        ng new angular-crud-example
        Choose:
          Routing: Yes
          Stylesheet format: CSS (or whatever you prefer)
    
    After the installation is complete, navigate to the project folder:
      bash
        cd angular-crud-example
        
Start the app to make sure it works:
    bash
      ng serve

______________________________________________________________________________________

Creating Components
    We will create a component to manage the objects we want to add and delete. 
    We use the Angular CLI to create the component:

      bash
        ng generate component items
        This will create an items folder with four files:
                  items.component.ts (TypeScript Master Code)
                  items.component.html (HTML structure)
                  items.component.css (Style)
                  items.component.spec.ts (For unit testing)

Creating an Interface for Objects
    We will create an Item interface for the data we will add and delete.

    Creation of Item Structure (Interface):
        We create a new models folder in src/app/ and inside it we create a file item.ts:

Creating Add and Delete Functionality
    Edit the items.component.ts:
    We will add the logic of adding and deleting the items to the items.component.ts. 

AppModule setup
    To use ngModel, we need to enter the FormsModule in the app.module.ts. 

______________________________________________________________________________________________

Run Project
    To run the project and view the application in your browser, use the command:
    
    bash
      ng serve
      After starting, open the browser and navigate to http://localhost:4200 address. 
      You will see the form to add new items and the list of items.

JSON File Preview
      When you add or delete objects, a items.json file is created that contains the data in JSON format. 
      This file can be saved locally via the browser.
      
===============================================================================================================

Conclusion
  This example covers the basic steps for creating an Angular app that adds, deletes, and saves data to a file. 
  It includes the installation of the Angular CLI, the creation of components and the use of interfaces. 
  If you have any questions or need help on a particular point, don't hesitate to ask.    
    
