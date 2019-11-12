import {
    Component, OnInit, Input, OnDestroy, Output,
    EventEmitter, OnChanges, ChangeDetectorRef
} from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})

export class LoaderComponent implements OnInit, OnDestroy, OnChanges {

    // @Input() name: string;
    // @Input() group: string;
    @Input() loadingImage: string;
    @Input() loaderSize = '60px';
    @Output() showChange = new EventEmitter();

    count = 0;

    public isShowing: boolean;

    @Input()
    get show(): boolean {
        return this.isShowing;
    }
    set show(val: boolean) {
        if (val === true) {
            ++this.count;
            this.isShowing = true;
        } else {
            if (this.count) {
                --this.count;
                if (this.count === 0) {
                    this.isShowing = false;
                }
            }
        }
        this.showChange.emit(this.isShowing);
    }

    constructor(
        private cdf: ChangeDetectorRef) {
    }

    // get loaderStyle() {
    //     console.log('this.loaderSize', this.loaderSize);
    //     return 'font-size:' + this.loaderSize + 'px;';
    // }

    ngOnChanges() {
        //   this.cdf.detectChanges();
    }

    ngOnInit(): void {
        // if (!this.name) {
        //     console.warn('Loader must have a "name" attribute. In Think Project');
        // }
        // this.loaderService._register(this);
    }

    ngOnDestroy(): void {
        // this.loaderService._unregister(this);
    }
}

