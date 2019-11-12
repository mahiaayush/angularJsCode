import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../../utility';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() multiple = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload() {

    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('file[0]', inputEl.files.item(i));
      }
      // formData.append('podXM', '1');

      this.http
        .post('https://mysocietyconnect.com/mps/fileUpload.php' || UrlConstants.METADATA_UPLOAD, formData)
        .subscribe((data) => {
          console.log(data, 'upload');
        });
      // do whatever you do...
      // subscribe to observable to listen for response
    }
  }

}


