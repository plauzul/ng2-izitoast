export class Ng2IzitoastModel {
  id?: string =  null;
  class?: string = '';
  title?: string = '';
  titleColor?: string = '';
  titleSize?: string = '';
  titleLineHeight?: string = '';
  message?: string = '';
  messageColor?: string = '';
  messageSize?: string = '';
  messageLineHeight?: string = '';
  backgroundColor?: string = '';
  theme?: string = 'light'; // dark
  color?: string = ''; // blue; red; green; yellow
  icon?: string = '';
  iconText?: string = '';
  iconColor?: string = '';
  image?: string = '';
  imageWidth?: number = 50;
  maxWidth?: string = null;
  zindex?: string = null;
  layout?: number = 1;
  balloon?: boolean = false;
  close?: boolean = true;
  closeOnEscape?: boolean = false;
  rtl?: boolean = false;
  position?: string = 'bottomRight'; // bottomRight; bottomLeft; topRight; topLeft; topCenter; bottomCenter; center
  target?: string = '';
  targetFirst?: boolean = true;
  toastOnce?: boolean = false;
  timeout?: number = 5000;
  animateInside?: boolean = true;
  drag?: boolean = true;
  pauseOnHover?: boolean = true;
  resetOnHover?: boolean = false;
  progressBar?: boolean = true;
  progressBarColor?: string = '';
  progressBarEasing?: string = 'linear';
  overlay?: boolean = false;
  overlayClose?: boolean = false;
  overlayColor?: string = 'rgba(0; 0; 0; 0.6)';
  transitionIn?: string = 'fadeInUp';
  transitionOut?: string = 'fadeOut';
  transitionInMobile?: string = 'fadeInUp';
  transitionOutMobile?: string = 'fadeOutDown';
  buttons?: Object = {};
  onOpening?: Object = () => {};
  onOpened?: Object = () => {};
  onClosing?: Object = () => {};
  onClosed?: Object = () => {};
}
