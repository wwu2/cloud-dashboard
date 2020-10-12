# Step to run the application in local(visual studio code)
  1. make sure you have node&npm installed in your local
  2. open the project with vs code
  3. run npm install command in the terminal
  4. run npm start command and open http://localhost:4200 in the browser

# Screen Shot
1. home page when you first open the application and there is no dashboard created
   ![home](https://user-images.githubusercontent.com/5234165/95719155-04d16880-0ca2-11eb-8066-b05849e7ee80.png)
2. start create dashboard
    ![create_dashboard](https://user-images.githubusercontent.com/5234165/95719232-1dda1980-0ca2-11eb-9ff7-10b4ad2354f2.jpg)
3. after click on save, you will be navigated to the dashboard detail page(with dashboard id in the url)
   ![dashboard_original](https://user-images.githubusercontent.com/5234165/95719359-4530e680-0ca2-11eb-912b-c0be3bcce825.png)
4. you can start add cloud resource
    ![dashboard_addResource](https://user-images.githubusercontent.com/5234165/95719563-96d97100-0ca2-11eb-8495-9181345803ac.png)
5. dashboard with multiple cloud resource, you can drag and drop/resize the cloud resource, you can swith the global context in the dropdown list, and click the Share URL button
   this will copy the url to the clipboard
    ![dashboard_withResources](https://user-images.githubusercontent.com/5234165/95719733-d4d69500-0ca2-11eb-8df5-f09ac05ef9be.png)
6. you can also create multiple dashboard, the dashboard list will be show in the home page
    ![home_multiple_dashboards](https://user-images.githubusercontent.com/5234165/95719817-f46dbd80-0ca2-11eb-9303-50f6d013d856.png)
7.  The draggable and resize is implemented via angular2-draggable plugin.

![dashboard_withResources](https://user-images.githubusercontent.com/5234165/95718885-a4422b80-0ca1-11eb-9bbc-c4c87132be33.png)

# CloudDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
