# Ng2Izitoast

Elegant, responsive, flexible and lightweight notification plugin implemented for angular 2 of [iziToast](https://github.com/dolce/iziToast)

[**izitoast**.marcelodolce.com](http://izitoast.marcelodolce.com)

![capa](http://i.imgur.com/NKk7Rxm.png)

## Install
```
npm install ng2-izitoast --save
```

## Configuration

in `angular-cli.json` add the script and css lines

```json
...
"styles": [
    "../node_modules/izitoast/dist/css/iziToast.min.css"
],
"scripts": [
    "../node_modules/izitoast/dist/js/iziToast.min.js"
],
...
```

## Running

in `app.module.ts` add
```typescript
import { Ng2IziToastModule } from 'ng2-izitoast';//<-- this line

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Ng2IziToastModule//<-- this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

now in `app.component.ts` add

```html
<ng2-izitoast
    [title]="'Hey'"
    [message]="'What would you like to add?'">
</ng2-izitoast>
```

All options applicable to ng2-izitoast

Argument | Default Value | Description
:---: | :---: | ---
**[class]** | *''* | The class that will be applied to the toast. It may be used as a reference.
**[title]** | *''* | Title of the toast.
**[titleColor]** | *''* | Title color.
**[message]** | *''* | Message of the toast.
**[messageColor]** | *''* | Message color.
**[backgroundColor]** | *''* | Background color of the Toast.
**[color]** | *''* | It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name".
**[icon]** | *''* | Icon class (font-icon of your choice, Icomoon, Fontawesome etc.).
**[iconText]** | *''* | Icon text (font-icon using text, Material Icons, etc.).
**[iconColor]** | *''* | Icon color.
**[image]** | *''* | Cover image.
**[imageWidth]** | *50* | Width of cover image.
**[zindex]** | *99999* | The z-index CSS attribute of the toast.
**[layout]** | *1* | It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3"
**[balloon]** | *false* | Applies a balloon like toast.
**[close]** | *true* | Show "x" close button.
**[rtl]** | *false* | RTL option.
**[position]** | *'bottomRight'* | Where it will be shown. It can be bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter or center.
**[target]** | *''* | Fixed place where you want to show the toasts. 
**[targetFirst]** | *true* | Add toast to first position
**[timeout]** | *5000* | Amount in milliseconds to close the toast or false to disable.
**[drag]** | *true* | Drag Feature. Is used to close the toast.
**[pauseOnHover]** | *true* | Pause the toast timeout while the cursor is on it.
**[resetOnHover]** | *false* | Reset the toast timeout while the cursor is on it.
**[progressbar]** | *true* | Enable timeout progress bar.
**[progressbarColor]** | *''* | Progress bar color.
**[animateInside]** | *true* | Enable animations of elements in the toast.
**[transitionIn]** | *'fadeInUp'* | Default toast open animation. It can be: bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
**[transitionOut]** | *'fadeOut'* | Default toast close animation. It can be: fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
**[transitionInMobile]** | *'fadeInUp'* | Default toast opening mobile transition.
**[transitionOutMobile]** | *'fadeOutDown'* | Default toast closing mobile transition.
**(iziToastOpen)** | *output* | Executed when the izitoast is opened.
**(iziToastClose)** | *output* | Executed when the izitoast is closed.