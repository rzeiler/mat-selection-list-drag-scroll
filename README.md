## mat-selection-list-drag-scroll

# How to fix selection lists drag scroll :fire:

The important modul is the **MatSliderModule**, this enabled the swipe up and down gesture. 

Open the  **app.module.ts**.

```ts
import { MatToolbarModule } from '@angular/material/toolbar';  
/* the important module */
import { MatSliderModule } from '@angular/material/slider';

@NgModule({  
    declarations: [  
    AppComponent
  ],
  imports: [
    /* some imports gos here */
    MatToolbarModule,
    MatSliderModule
  ],
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Checkout on mobile browser!
[Demo]()