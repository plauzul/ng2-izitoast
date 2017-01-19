import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var iziToast;

@Component({
  selector: 'ng2-izitoast',
  template: ''
})
export class Ng2IziToastComponent implements OnInit {

  @Input() class: string = '';
  @Input() title: string = 'Title';
  @Input() titleColor: string = '';
  @Input() message: string = 'Message';
  @Input() messageColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() color: string = '';
  @Input() icon: string = '';
  @Input() iconText: string = '';
  @Input() iconColor: string = '';
  @Input() image: string = '';
  @Input() imageWidth: number = 50;
  @Input() zindex: number = 99999;
  @Input() layout: number = 1;
  @Input() balloon: boolean;
  @Input() close: boolean = true;
  @Input() rtl: boolean;
  @Input() position: string = 'bottomRight';
  @Input() target: string = '';
  @Input() targetFirst: boolean = true;
  @Input() timeout: number = 5000;
  @Input() drag: boolean = true;
  @Input() pauseOnHover: boolean = true;
  @Input() resetOnHover: boolean;
  @Input() progressBar: boolean = true;
  @Input() progressBarColor: string = '';
  @Input() animateInside: boolean = true;
  @Input() buttons: any = {};
  @Input() transitionIn: string = 'fadeInUp';
  @Input() transitionOut: string = 'fadeOut';
  @Input() transitionInMobile: string = 'fadeInUp';
  @Input() transitionOutMobile: string = 'fadeOutDown';
  @Output() iziToastOpen = new EventEmitter<boolean>();
  @Output() iziToastClose = new EventEmitter<boolean>();

  ngOnInit() {
    iziToast.show({
      class: this.class,
      title: this.title,
      titleColor: this.titleColor,
      message: this.message,
      messageColor: this.messageColor,
      backgroundColor: this.backgroundColor,
      color: this.color, // blue, red, green, yellow
      icon: this.icon,
      iconText: this.iconText,
      iconColor: this.iconColor,
      image: this.image,
      imageWidth: this.imageWidth,
      zindex: this.zindex,
      layout: this.layout,
      balloon: this.balloon,
      close: this.close,
      rtl: this.rtl,
      position: this.position, // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      target: this.target,
      targetFirst: this.targetFirst,
      timeout: this.timeout,
      drag: this.drag,
      pauseOnHover: this.pauseOnHover,
      resetOnHover: this.resetOnHover,
      progressBar: this.progressBar,
      progressBarColor: this.progressBarColor,
      animateInside: this.animateInside,
      buttons: this.buttons,
      transitionIn: this.transitionIn,
      transitionOut: this.transitionOut,
      transitionInMobile: this.transitionInMobile,
      transitionOutMobile: this.transitionOutMobile,
      onOpen: () => {
        this.iziToastOpen.emit(true);
      },
      onClose: () => {
        this.iziToastClose.emit(true);
      }
    });
  }

}