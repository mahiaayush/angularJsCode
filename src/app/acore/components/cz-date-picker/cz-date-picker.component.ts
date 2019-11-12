import {
    Component, OnInit, Input, Output,
    EventEmitter, ViewChild, OnChanges, AfterViewInit
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Utils } from '../../utility';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { Moment } from 'moment';


export class SearchModelType {
    value: any;
    columnName: any;
    desc: any;

    constructor(newId: any, newDesc: any, newColumnName: any) {
        this.value = newId;
        this.desc = newDesc;
        this.columnName = newColumnName;
    }
}



declare var moment: any;

@Component({
    selector: 'app-cz-date-picker',
    templateUrl: './cz-date-picker.component.html',
    styleUrls: ['./cz-date-picker.component.css'],
    providers: [DatePipe]
})
export class CzDatePickerComponent /*extends Daterangepicker*/ implements OnInit, OnChanges, AfterViewInit {
    @Input() defaultInput: any;
    @Input() dataInput: any;
    @Input() dateFormat: 'MMM dd, yyyy';
    @Input() singleDatePickerState = false;
    @Output() select = new EventEmitter<string>();
    @ViewChild(DaterangePickerComponent) picker: DaterangePickerComponent;

    @Input() initBlank: boolean;

    displayValue: any;

    dateOptions = {
        'showDropdowns': true,
        'cancelClass': 'btn-danger',
        singleDatePicker: false,
        alwaysShowCalendars: false,
        locale: {
            cancelLabel: 'Clear',
            format: 'MMM DD, YYYY'
        },
        ranges: {
            'Last Month': [moment().subtract(1, 'month'), moment()],
            'Last 3 Months': [moment().subtract(3, 'month'), moment()],
            'Last 6 Months': [moment().subtract(6, 'month'), moment()],
            'Last 12 Months': [moment().subtract(12, 'month'), moment()],
        }
        // "autoApply": true
    }



    constructor(private datePipe: DatePipe) {
    }


    ngAfterViewInit() {
        console.log(this.picker)

        this.picker.applyDaterangepicker.subscribe((event) => {

            this.setNewValue(event.picker.startDate, event.picker.endDate);
        });
    }

    ngOnChanges() {
        this.dateOptions.singleDatePicker = this.singleDatePickerState;
    }


    public selectedDate(value: any, dateInput: any) {

        dateInput.dbStart = new SearchModelType(Utils.formatDateData(value.start, 'MM/dd/yyyy'),
            Utils.formatDateDataWithDefault(value.start), 'dbStart');

        dateInput.dbEnd = new SearchModelType(Utils.formatDateData(value.end, 'MM/dd/yyyy'),
            Utils.formatDateDataWithDefault(value.end), 'dbEnd');

        this.updateDisplayValue();
        this.select.emit(dateInput);
    }



    public setDefaultDate(value: any, dateInput: any) {

        if (value.start) {
            dateInput.dbStart = new SearchModelType(Utils.formatDateData(value.start, 'MM/dd/yyyy'),
                Utils.formatDateDataWithDefault(value.start), 'dbStart');
        }

        if (value.end) {
            dateInput.dbEnd = new SearchModelType(Utils.formatDateData(value.end, 'MM/dd/yyyy'),
                Utils.formatDateDataWithDefault(value.end), 'dbEnd');
        }


        this.updateDisplayValue();
        this.select.emit(dateInput);
    }

    ngOnInit() {

        if (!this.dataInput) {
            throw new Error('Date Picker must have a "dataInput" attribute.');
        }
        if (this.defaultInput) {
            const value = {};
            if (this.defaultInput && this.defaultInput.startDate) {
                value['start'] = moment(this.defaultInput.startDate);
            }
            if (this.defaultInput && this.defaultInput.endDate) {
                value['end'] = moment(this.defaultInput.endDate);
            }
            this.setDefaultDate(value, this.dataInput);
        } else if (Utils.isEmpty(this.dataInput) || Utils.isEmpty(this.dataInput.dbStart)) {
            const start = moment().subtract('month', 1).startOf('month');
            const end = moment().subtract('month', 1).endOf('month');

            if (!this.initBlank) {
                this.setNewValue(this.singleDatePickerState ? end : start, end);
            }

        }
    }

    updateDisplayValue() {

        if (this.dataInput !== undefined && (!Utils.isEmpty(this.dataInput.dbStart))
            && (!Utils.isEmpty(this.dataInput.dbEnd))) {
            if (this.singleDatePickerState) {
                this.displayValue = Utils.formatDateDataWithDefault(this.dataInput.dbStart.desc);
            } else {
                this.displayValue = Utils.formatDateDataWithDefault(this.dataInput.dbStart.desc)
                    + ' - ' + Utils.formatDateDataWithDefault(this.dataInput.dbEnd.desc);
            }
        } else {
            this.displayValue = '';
        }
    }

    calendarCanceled(event: any) {
        this.dataInput.dbStart = null;
        this.dataInput.dbEnd = null;
        this.displayValue = '-';
        this.select.emit(this.dataInput);
    }


    calendarApplied(e: any) {
        console.log(e);
        // e.event
        // e.picker
    }



    setNewValue(pStartDate: any, pEndDate: any) {
        if (this.dataInput !== undefined) {
            this.dataInput.dbStart = new SearchModelType(Utils.formatDateData(pStartDate, 'MM/dd/yyyy'),
                Utils.formatDateDataWithDefault(pStartDate), 'dbStart');

            this.dataInput.dbEnd = new SearchModelType(Utils.formatDateData(pEndDate, 'MM/dd/yyyy'),
                Utils.formatDateDataWithDefault(pEndDate), 'dbEnd');
        }


        if ((this.picker) && (this.picker.datePicker)) {

            this.picker.datePicker.setStartDate(pStartDate);
            this.picker.datePicker.setEndDate(pEndDate);
        }
        this.updateDisplayValue();
    }

}
