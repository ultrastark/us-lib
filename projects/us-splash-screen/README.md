# Us-Splash-Screen Service
*ALPHA VERSION*

Service used to show - hide us splash screen inside a Angular project

Provided inside the index.html to speed up the first Contentful Paint (down to 1.2s)

## Getting Started
Use [our cli](https://www.npmjs.com/package/@ultrastark/cli) and run ```us add splash-screen```

or

Add the following code inside the index.html file (the code may change)
```
<head>
  /.../

  <!-- US Splash Screen css-->
  <link
    rel="stylesheet"
    type="text/css"
    href="https://ultrastark.ch/assets/splash-screen/splash-screen.css"
  />
</head>

<body>
    <!-- US Splash Screen -->
    <us-splash-screen id="us-splash-screen">
      <div class="center">
        <!-- Material Design Spinner -->
        <div class="spinner-wrapper">
          <div class="spinner">
            <div class="inner">
              <div class="gap"></div>
              <div class="left">
                <div class="half-circle"></div>
              </div>
              <div class="right">
                <div class="half-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- / Material Design Spinner -->
      </div>
    </us-splash-screen>
    <!-- / US Splash Screen -->

    <app-root></app-root>
</body>
```
And import the services into the app.component.ts
```
  import { UsSplashScreenService } from '@ultrastark/us-splash-screen'

  /.../

  constructor(
    private _usSplashScreenService: UsSplashScreenService,
  ) { /.../ }
```
