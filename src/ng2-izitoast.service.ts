import { Injectable, ElementRef } from '@angular/core';
import { Ng2IzitoastModel } from "./ng2-izitoast.model";

declare let iziToast;

@Injectable()
export class Ng2IzitoastService {

  private toastConfigQuestion: Object;

  constructor() {
    this.toastConfigQuestion = {
      timeout: 20000,
      close: false,
      overlay: true,
      toastOnce: true,
      id: 'question',
      zindex: 999,
      title: 'Hey',
      message: 'Are you sure about that?',
      position: 'center',
      buttons: [
          ['<button><b>YES</b></button>', function (instance, toast) {
   
              instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
   
          }, true],
          ['<button>NO</button>', function (instance, toast) {
   
              instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
   
          }]
      ],
      onClosing: function(instance, toast, closedBy){
          console.info('Closing | closedBy: ' + closedBy);
      },
      onClosed: function(instance, toast, closedBy){
          console.info('Closed | closedBy: ' + closedBy);
      }
    }
  }

  show(data: Ng2IzitoastModel) {
    iziToast.show(data);
    return data;
  }
  
  info(data: Ng2IzitoastModel) {
    iziToast.info(data);
    return data;
  }

  success(data: Ng2IzitoastModel) {
    iziToast.success(data);
    return data;
  }

  warning(data: Ng2IzitoastModel) {
    iziToast.warning(data);
    return data;
  }

  error(data: Ng2IzitoastModel) {
    iziToast.error(data);
    return data;
  }

  question(data: Ng2IzitoastModel) {
    let iziToastConfig = Object.assign({}, this.toastConfigQuestion, data);
    iziToast.question(iziToastConfig);
    return iziToastConfig;
  }

  progress(iziToastClass: string) {
    let toast = document.querySelector(iziToastClass);

    return {
      reset: () => {
        setTimeout(() => {
          iziToast.progress(toast).reset();
        }, 100);
      },
      pause: () => {
        setTimeout(() => {
          iziToast.progress(toast).pause();
        }, 100);
      },
      resume: () => {
        setTimeout(() => {
          iziToast.progress(toast).resume();
        }, 100);
      },
      start: () => {
        setTimeout(() => {
          iziToast.progress(toast).start();
        }, 100);
      }
    }
  }

  hide(iziToastClass: string, options: Ng2IzitoastModel = null) {
    let toast = document.querySelector(iziToastClass);
    iziToast.hide(toast, options);
  }

  destroy() {
    iziToast.destroy();
  }

  settings(data: Ng2IzitoastModel) {
    iziToast.settings(data);
    return data;
  }

}
