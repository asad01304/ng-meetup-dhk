![picture alt](https://cdn-images-1.medium.com/fit/t/1600/480/1*jCKAPw5iNBrAPvsR2glr5w.jpeg "Angular - performace")
# Angular - performace 

## Application structure
![picture alt](https://s3.amazonaws.com/media-p.slid.es/uploads/489548/images/4371787/Screen_Shot_2017-11-25_at_10.29.03_AM.png "Application structure")

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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
