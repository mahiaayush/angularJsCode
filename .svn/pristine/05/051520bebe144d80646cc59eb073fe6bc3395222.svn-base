import { Injectable } from '@angular/core';

declare var $;

@Injectable()

export class DesktopDesignService {
      constructor() {
      }



      /* ========================================================================
 * Tutorial specific Javascript
 *
 * ========================================================================
 * Copyright 2015 Bootbites.com (unless otherwise stated)
 * For license information see: http://bootbites.com/license
 * ======================================================================== */

      dropdownSelectors: any = () => {
            return $('.dropdown, .dropup');
      }

      // Custom function to read dropdown data
      // =========================
      dropdownEffectData(target) {
            // @todo - page level global?
            let effectInDefault = null,
                  effectOutDefault = null;
            let dropdown = $(target), dropdownMenu = $('.dropdown-menu', target);
            let parentUl = dropdown.parents('ul.custNav');

            // If parent is ul.nav allow global effect settings
            if (parentUl.size() > 0) {
                  effectInDefault = parentUl.data('dropdown-in') || null;
                  effectOutDefault = parentUl.data('dropdown-out') || null;

            }

            return {
                  target: target,
                  dropdown: dropdown,
                  dropdownMenu: dropdownMenu,
                  effectIn: dropdownMenu.data('dropdown-in') || effectInDefault,
                  effectOut: dropdownMenu.data('dropdown-out') || effectOutDefault,
            };
      }

      // Custom function to start effect (in or out)
      // =========================
      dropdownEffectStart(data, effectToStart) {
            if (effectToStart) {
                  data.dropdown.addClass('dropdown-animating');
                  data.dropdownMenu.addClass('animated');
                  data.dropdownMenu.addClass(effectToStart);
            }
      }

      // Custom function to read when animation is over
      // =========================
      dropdownEffectEnd(data, callbackFunc) {
            const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            data.dropdown.one(animationEnd, function () {
                  data.dropdown.removeClass('dropdown-animating');
                  data.dropdownMenu.removeClass('animated');
                  data.dropdownMenu.removeClass(data.effectIn);
                  data.dropdownMenu.removeClass(data.effectOut);

                  // Custom callback option, used to remove open class in out effect
                  if (typeof callbackFunc === 'function') {
                        callbackFunc();
                  }
            });
      }

      // Bootstrap API hooks
      // =========================

      dropdownSelectorsON() {
            this.dropdownSelectors.on({
                  'show.bs.dropdown': function () {
                        // On show, start in effect
                        const dropdown = this.dropdownEffectData(this);
                        this.dropdownEffectStart(dropdown, dropdown.effectIn);
                  },
                  'shown.bs.dropdown': function () {
                        // On shown, remove in effect once complete
                        const dropdown = this.dropdownEffectData(this);
                        if (dropdown.effectIn && dropdown.effectOut) {
                              this.dropdownEffectEnd(dropdown, function () { });
                        }
                  },
                  'hide.bs.dropdown': function (e) {
                        // On hide, start out effect
                        const dropdown = this.dropdownEffectData(this);
                        if (dropdown.effectOut) {
                              e.preventDefault();
                              this.dropdownEffectStart(dropdown, dropdown.effectOut);
                              this.dropdownEffectEnd(dropdown, function () {
                                    dropdown.dropdown.removeClass('show');
                                    dropdown.dropdownMenu.removeClass('show');
                              });
                        }
                  },
            });
      }







}
