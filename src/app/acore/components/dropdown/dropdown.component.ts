import {
  Component, OnInit, forwardRef,
  Input, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import {
  IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings
} from 'angular-2-dropdown-multiselect';
import {
  ControlValueAccessor, Validator, NG_VALUE_ACCESSOR,
  NG_VALIDATORS, FormControl
} from '@angular/forms';


import { mySettings, myTexts } from './dropdown.setting';
import { Utils, ProjectUtils } from '../../utility';
import { CustomFormControl } from '../core';
import { DataDropDownOptions, DropdownBodyParameter } from './dropdown.model';
import { DropdownService } from './dropdown.service';
import { Subject } from 'rxjs/Subject';


const MY_NG_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

const MY_NG_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    MY_NG_VALUE_ACCESSOR,
    MY_NG_VALIDATORS,
  ]
})


export class DropdownComponent extends CustomFormControl implements OnInit {


  @Input() triggerHardCore: Subject<any>;
  @Input() ddOptions: DataDropDownOptions;
  @Output() valueChange = new EventEmitter<any>();


  optionsModel: number[];
  myOptions: IMultiSelectOption[] = [];
  mySettings: IMultiSelectSettings = Utils.assignNewCopy(mySettings);
  myTexts: IMultiSelectTexts = Utils.assignNewCopy(myTexts);


  constructor(
    private dropdownService: DropdownService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.dropdownService.errorChecking(this.ddOptions);
    this.dropdownService.dropDownSetting(this.ddOptions, this.mySettings, this.myTexts);
    this.mySettings = Utils.assignNewCopy(this.mySettings);
    this.getDropDownData(this.ddOptions.serviceURL);
    this.sub_Trigger();
  }


  assignValueToDisplay(val: any) {
    this.optionsModel = val;
    this.onChange(this.optionsModel);
  }
  onChange(event: any) {
    this.valueChange.emit(this.optionsModel);
    this.propagateChange(this.optionsModel);
  }


  initialDataSetting() {
    if (!this.isDisabled) {
      this.getDropDownData();
    }
  }


  setMyOptions(data) {
    this.myOptions = this.dropdownService.setMyOption(this.ddOptions, data);
    this.cdr.detectChanges();
  }




  onClick() {

  }

  getDropDownData(url?: string) {


    if (url) {
      this.ddOptions.loader.show = true;
      this.dropdownService.getDropDownData(url, this.ddOptions)
        .subscribe((data) => {

          if (this.dropdownService.apiSessionCheck(data)) {
            this.ddOptions.loader.show = false;
            data = ProjectUtils.filterDataFromDataKey(data);
            this.setMyOptions(data);
          }


        });
    }


  }



  sub_Trigger() {

    if (this.triggerHardCore instanceof Subject) {
      this.triggerHardCore
        .subscribe((data) => {

          if (this.dropdownService.apiSessionCheck(data)) {
            this.setMyOptions(data);
          }
        });
    }
  }


}
