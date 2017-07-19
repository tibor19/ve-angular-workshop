# Lab 1

In this lab you are going to add support for angular by using angular cli. Please keep in mind that the folder exists already and that you might alredy have a `.git` folder.

# Lab 2

In this lab we are going to create the main components for the application. 
Analyse the `.html` files in the `Artifacts` folder in order to understand the structure of the application.
Start with `home.html` page and split it into several components. One for header, one for footer, one for navigation and another one for the content itself. Do the same for the other pages. (Remeber: You already have soem components).

When you are going to test the application you will notice that the pictures are broken. In order to fix that we need to move the `content` folder from the `Artifacts` folder to the `src` folder and mark it as an asset folder. (Hint! Look into the `.angular.cli.json` to see how).
 
 # Lab 3

 In this lab we are going to use interpolation binding, one way binding, `*ngIf`, and `*ngForOf` to create a data driven weekly menu. (Helpful hint: `*ngForOf` presents several exported variables, such as index, odd, even ...)

# Lab 4

In this lab we are going to convert the hard-coded image path into a pipe (Hint look at ng g p)

# Lab 5

In this lab we are going to use ViewChild and view lifecycle hooks to pass data to the children components.

# Lab 6

In this lab we are going to create a simple service to return the data and we are going to use DI to inject it into the components
