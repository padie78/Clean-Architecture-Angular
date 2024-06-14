import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhotoRepository } from '../domain/interfaces/repository/iPhoto-repository';
import { Observable, delay } from 'rxjs';
import { PhotoEntity } from '../domain/entities/photo-entity';


@Injectable({
  providedIn: 'root'
})
export  class PhotoApiNoDelayService extends IPhotoRepository {
  private _url = 'https://jsonplaceholder.typicode.com/photos/';
  constructor(private http: HttpClient) {super();}


    get(id?: number): Observable<PhotoEntity> {
      return this.http.get<PhotoEntity>(this._url+id);    }

    insert(param: PhotoEntity): Observable<PhotoEntity> {
        throw new Error('Method not implemented.');
    }

    update(param: PhotoEntity): Observable<PhotoEntity> {
        throw new Error('Method not implemented.');
    }

}