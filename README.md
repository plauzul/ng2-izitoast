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

```typescript
...
constructor(public iziToast: Ng2IzitoastService) {}
...

...
this.iziToast.show({title: "Welcome"});
...
```

All options applicable to ng2-izitoast   48

Argument | Default Value | Description
:---: | :---: | ---
**class** | *''* | The class that will be applied to the toast. It may be used as a reference.
**title** | *''* | Title of the toast.
**titleColor** | *''* | Title color.
**titleSize** | *''* | Title fontSize.
**titleLineHeight** | *''* | Title lineHeight.
**message** | *''* | Message of the toast.
**messageColor** | *''* | Message color.
**messageSize** | *''* | Message fontSize.
**messageLineHeight** | *''* | Message lineHeight.
**backgroundColor** | *''* | Background color of the Toast.
**theme** | *light* | It can be light or dark or set another class. Create and use like this ".iziToast-theme-name" 
**color** | *''* | It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name".
**icon** | *''* | Icon class (font-icon of your choice, Icomoon, Fontawesome etc.).
**iconText** | *''* | Icon text (font-icon using text, Material Ithemecons, etc.).
**iconColor** | *''* | Icon color.
**image** | *''* | Cover image.
**imageWidth** | *50* | Width of cover image
**maxWidth** | *null* | set maxWidth of toast
**zindex** | *99999* | The z-index CSS attribute of the toast.
**layout** | *1* | It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3"
**balloon** | *false* | Applies a balloon like toast.
**close** | *true* | Show "x" close button.
**closeOnEscape** | *false* | Allows to close toast using the Esc key.
**rtl** | *false* | RTL option.
**position** | *'bottomRight'* | Where it will be shown. It can be bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter or center.
**target** | *''* | Fixed place where you want to show the toasts. 
**targetFirst** | *true* | Add toast to first position
**toastOnce** | *false* | Waits for another toast to be closed on 'onClosed' function. You'll need an ID to use it.
**timeout** | *5000* | Amount in milliseconds to close the toast or false to disable.
**drag** | *true* | Drag Feature. Is used to close the toast.
**pauseOnHover** | *true* | Pause the toast timeout while the cursor is on it.
**resetOnHover** | *false* | Reset the toast timeout while the cursor is on it.
**progressbar** | *true* | Enable timeout progress bar.
**progressbarColor** | *''* | Progress bar color.
**progressBarEasing** | *linear* | Animation Easing of progress bar.
**overlay** | *false* | Enables display the Overlay layer on the page.
**overlayClose** | *false* | Allows to close toast clicking on the Overlay.
**overlayColor** | *rgba(0, 0, 0, 0.6)* | Overlay background color.
**animateInside** | *true* | Enable animations of elements in the toast.
**transitionIn** | *'fadeInUp'* | Default toast open animation. It can be: bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
**transitionOut** | *'fadeOut'* | Default toast close animation. It can be: fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
**transitionInMobile** | *'fadeInUp'* | Default toast opening mobile transition.
**transitionOutMobile** | *'fadeOutDown'* | Default toast closing mobile transition.
**onOpening** | *function() {}* | Callback function triggered when opening the toast.
**onOpened** | *function() {}* | Callback function triggered when onOpened the toast.
**onClosing** | *function() {}* | Callback function triggered when closing the toast.
**onClosed** | *function() {}* | Callback function triggered when closed the toast.

## Examples
**Question**
```typescript
...
constructor(public iziToast: Ng2IzitoastService) {}
...

...
this.iziToast.question({
  title: "Welcome",
  progressBarColor: "red",
  onOpened: () => {
    console.log("opened");
  }
});
...
```

**Progress**
```typescript
...
constructor(public iziToast: Ng2IzitoastService) {}
...

...
this.iziToast.question({
  title: "Welcome",
  class: "foo",
  progressBarColor: "red",
  onOpened: () => {
    console.log("opened");
  }
});

this.iziToast.progress(".foo").pause();
this.iziToast.progress(".foo").resume();
this.iziToast.progress(".foo").reset();
this.iziToast.progress(".foo").start();
...
```

**Hide**
```typescript
...
constructor(public iziToast: Ng2IzitoastService) {}
...

...
this.iziToast.show({
  title: "Welcome",
  class: "foo",
  progressBarColor: "red",
  onClosed: () => {
    console.log("closed");
  }
});

this.iziToast.hide(".foo");
...
```