declare var $;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';


export class HtmlUtil {

      public checkBox(conditionValue?: string | any, baseKey?: string, key?: string): any {

            if (conditionValue) {
                  return (val) => {
                        this.boolToCheckBox(val[baseKey][key] === conditionValue);
                        // if (val[baseKey][key] === conditionValue) {
                        //       return '<input type="checkbox" name="check" checked >';
                        // } else {
                        //       return '<input type="checkbox" name="check">';
                        // }
                  };
            } else {
                  return this.boolToCheckBox;
            }


      }

      public boolToCheckBox(val: boolean) {
            if (val) {
                  return '<input type="checkbox" name="check" checked >';
            } else {
                  return '<input type="checkbox" name="check">';
            }
      }


      public radio(conditionValue, baseKey, key, ...values): any {
            return (val) => {
                  if (val[baseKey][key] === conditionValue) {
                        return '<input type="radio" checked="true" name="' + val[baseKey][key] + '-role" value="' + values[1] + '" >';
                  } else {
                        return '<input type="radio" name="' + val[baseKey][key] + '-role" value="' + values[0] + '">';
                  }
            };
      }

      addCssToEle(targetBodyID: string, childrenEleClass: string, addClass: string, removeClass: string) {

            const topEle = document.getElementById(targetBodyID);
            const classEle: any = document.getElementsByClassName(childrenEleClass);
            const links = Array.from(classEle);
            links.forEach((link: any) => {
                  link.onclick = () => {

                        links.forEach((link2: any) => {
                              link2.classList.remove(addClass);
                              if (!link2.classList.contains(removeClass)) {
                                    link2.classList.add(removeClass);
                              }

                        });
                        link.classList.remove(removeClass);
                        link.classList.add(addClass);

                  };
            });

      }



      fadeIn(id: string, durationInMilliseconds: number |
            string | 'slow' | 'fast' = 'slow') {
            $('#' + id).fadeIn(durationInMilliseconds);
      }


      fadeOut(id: string, durationInMilliseconds: number |
            string | 'slow' | 'fast' = 'slow') {
            $('#' + id).fadeOut(durationInMilliseconds);
      }


      showMsgForDuration(id: string, time: number = 2000) {
            this.fadeIn(id);
            setTimeout(() => {
                  this.fadeOut(id);
            }, time);
      }

      scrollToCordinates(x: number, y: number) {
            const timer = Observable.timer(450, 1);
            let scrollValueY = window.scrollY || 0;
            if (y !== null) {
                  const timerSub = timer.subscribe((count) => {
                        window.scrollTo(x, scrollValueY);
                        if (y > scrollValueY) {
                              scrollValueY += 2;
                        } else {
                              timerSub.unsubscribe();
                        }

                  });

            }
      }

      numericValidation(e: any) {  // to be fire on keydown

            let input;
            if (e.which > 95 && e.which < 107) {
                  return true;
            } else if ((e.which > 34 && e.which < 38) || e.which === 39 || e.which === 46) {
                  return true;
            } else if (e.metaKey || e.ctrlKey) {
                  return true;
            } else if (e.which === 32) {
                  return false;
            } else if (e.which === 0) {
                  return true;
            } else if (e.which < 33) {
                  return true;
            }

            input = String.fromCharCode(e.which);
            return !!/[\d\s]/.test(input);
      }

      numericValidationOnPaste(e: any) { // to be fire on paste event;
            const prevValue = e.target.value;
            setTimeout(() => {
                  if (isNaN(e.target.value)) {
                        e.target.value = prevValue;
                  }
            }, 1);
      }

      validateFeedback(id: string, popUpID: string) {
            const phone: any = document.getElementById(id);
            const RE = /^[\d\.\-]+$/;
            if (!RE.test(phone.value)) {
                  this.showMsgForDuration(popUpID);
                  return false;
            }
            return true;
      }


}
