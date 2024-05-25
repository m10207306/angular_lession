import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData = new MeetingRoom()
  rootUrl = ""
  public list: MeetingRoom[] = [];

  constructor(private http: HttpClient) {
    this.rootUrl = environment.apiUrl
  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .subscribe(
        {
          next: resp => this.list = resp,
          error: error => console.log(error)
        }
      )
    }
    
  getByID(id: number) {
    this.http.get<MeetingRoom>(this.rootUrl + `/${id}`)
    .subscribe(
      {
        next: resp => this.formData = resp,
        error: error => console.log(error)
      }
    )
  }

  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData)
  }

  putMeetingRoom() {
    return this.http.put(this.rootUrl + "/" + this.formData.id, this.formData)
  }

  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + "/" + id)
  }

}
