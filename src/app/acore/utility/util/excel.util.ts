import * as XLSX from 'xlsx';

export class ExcelUtil {


  generateExcel(data: Array<any>, fileName: string, sheetName: string = 'Sheet1') {

    const keys = Object.keys(data[0]);
    const inputData = [];

    data.forEach((item) => {


      const retValue = [];
      keys.forEach((key) => {
        retValue.push(item[key]);
      });

      inputData.push(retValue);

    });


    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([keys].concat(inputData));
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    /* save to file */
    XLSX.writeFile(wb, fileName + '.xlsx');
  }

  generateExcelFromAgFilter(data: Array<Array<any>>, fileName: string, sheetName: string = 'Sheet1') {



    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    /* save to file */
    XLSX.writeFile(wb, fileName + '.xlsx');
  }


}
