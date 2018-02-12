import { Ng2IzitoastModel } from "../model/ng2-izitoast.model";
export declare class Ng2IzitoastService {
    private toastConfigQuestion;
    constructor();
    show(data: Ng2IzitoastModel): Ng2IzitoastModel;
    info(data: Ng2IzitoastModel): Ng2IzitoastModel;
    success(data: Ng2IzitoastModel): Ng2IzitoastModel;
    warning(data: Ng2IzitoastModel): Ng2IzitoastModel;
    error(data: Ng2IzitoastModel): Ng2IzitoastModel;
    question(data: Ng2IzitoastModel): Object & Ng2IzitoastModel;
    progress(iziToastClass: string): {
        reset: () => void;
        pause: () => void;
        resume: () => void;
        start: () => void;
    };
    hide(iziToastClass: string, options?: Ng2IzitoastModel): void;
    destroy(): void;
    settings(data: Ng2IzitoastModel): Ng2IzitoastModel;
}
