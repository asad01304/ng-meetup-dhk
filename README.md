![picture alt](https://cdn-images-1.medium.com/fit/t/1600/480/1*jCKAPw5iNBrAPvsR2glr5w.jpeg "Angular - performace")
# Angular - performace 

## Application structure
![picture alt](https://s3.amazonaws.com/media-p.slid.es/uploads/489548/images/4371791/Screen_Shot_2017-11-25_at_10.56.41_AM.png "Application structure")

## File size optimizing

* Use Ahead Of Time compilation (AOT) to compile components at the time of building your app
```
ng serve --aot=true
```   
* By default in dev mode angular-cli do not minify your js codes. Use production mode build to minify your js files
```
ng serve --aot=true --prod
```
* All js resources sould be cached in browser. While serving our app thru NginX or cloudfront we usually configure server to caches our js resources - so that with each request server no need to read files from physical media. To do so we need to maintain version controlling in js file names. To achive this use output-hashing 
```
ng serve --aot=true --prod output-hashing=bundles
```
## Lazy loading

* Use angular's CommonModule module to modulerize your application into small chunks of logical unit. 
* With route change only load required module, this will reduce initial loading time.
* Check above application structure image - we modulerize AppModule into serveral chunks (DashboardModule, LoginModule, ArticleModule etc)

## Shared module
* Each common module imports some common other angular + third party modules (FormModule, HttpClientModule, AngularFireModule etc). So far each lazy loaded module imports them individually. 
* Each common module chunk bundles it's own dependent modules, that means same module downloaded several times
* Code manageability is not good when we are configurating third party modules in different separate moduels
* Use shared module to import all common modules & export them as part of shared module.
* Now App module & other lazy loaded modules will import shared modules as "forRoot". So they will not be chunked with child modules
* example: https://github.com/asad01304/ng-meetup-dhk/blob/master/src/app/shared/shared.module.ts

## trackBy
* When angular reders an array of objects, it has no clue which itesm changed and which one to re-render. Instead angular re-render the entire array 
* using trackBy we can help angular to understand which array element correspond to which dom row. Then angular will only re-render the dom correspond to changed array item.
* example:
  * https://github.com/asad01304/ng-meetup-dhk/blob/fabf81acf505d4a8925c4eec326e07e2bbcc262f/src/app/dashboard/dashboard.component.html#L21
  * https://github.com/asad01304/ng-meetup-dhk/blob/fabf81acf505d4a8925c4eec326e07e2bbcc262f/src/app/dashboard/dashboard.component.ts#L80



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
