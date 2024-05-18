import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';
import { WeatherForecast } from './weather-forecast';
import { User } from './user';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styles: [
  ]
})
export class Part2Component {
  connToAPI = inject(ConnToWebAPIService)
  result: string = ""

  Get117() {
    this.connToAPI.Get117().subscribe(
      {
        next: resp => this.result = resp,
        error: error => console.log(error)
      }
    )
  }

  wfList: WeatherForecast[] = [];
  GetWeatherForcast() {
    this.connToAPI.GetWeatherForecast().subscribe(
      {
        next: resp => this.wfList = resp,
        error: error => console.log(error)
      }
    )
  }

  user: any;
  GetUser(id: any) {
    this.connToAPI.GetUser(id).subscribe(
      {
        next: resp => this.user = resp,
        error: error => console.log(error)
      }
    )
  }

  optionResult: any;
  GetUserByOptions(id: any, observe: string) {
    this.connToAPI.GetUSerByOptions(111, observe).subscribe(
      {
        next: resp => this.optionResult = `${observe}: ${JSON.stringify(resp)}`,
        error: error => console.log(error)
      }
    )
  }

  postResult: any;
  POSTUser(uid: string, uname: string) {
    let user = new User(Number(uid), uname)
    this.connToAPI.POSTUser(user).subscribe(
      {
        next: resp => this.postResult = resp,
        error: error => console.log(error)
      }
    )
  }

  @ViewChild("img") img!: ElementRef
  public progress: number = 0;
  public message: string = "";
  public imgsrc: string = "";
  private downloadFile = (data: HttpResponse<Blob>, file: string) => {
    let body: any = data.body
    const downloadedFile = new Blob([body], {type: data.body?.type});
    const a = document.createElement("a");
    a.setAttribute("style", "display: none")
    document.body.appendChild(a)
    a.href = URL.createObjectURL(downloadedFile)
    a.target = "_blank"
    a.click()
    this.img.nativeElement.src = a.href
    console.log(a)
    document.body.removeChild(a)
  }

  GetDownload(file: string) {
    if (!file || file == "") return
    this.connToAPI.GetDownload(file).subscribe(
      {
        next: (event) => {
          if (event.type == HttpEventType.DownloadProgress) {
            let total: number | any = event.total?.valueOf();
            this.progress = Math.round((100 * event.loaded) / total);
            console.log(this.progress)
          }
          else if (event.type == HttpEventType.Response) {
            this.message = "Download success"
            console.log(this.message)
            this.downloadFile(event, file)
          }
        },
        error: error => console.log(error),
        complete: () => console.info("done")
      }
    )
  }
}
