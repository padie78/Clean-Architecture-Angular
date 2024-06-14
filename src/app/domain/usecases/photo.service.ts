import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IPhotoUsecase } from '../interfaces/usecases/iPhoto-usecase';
import { IPhotoRepository } from '../interfaces/repository/iPhoto-repository';
import { PhotoEntity } from '../entities/photo-entity';

@Injectable({
  providedIn: 'root'
})
export class PhotoUsecase implements IPhotoUsecase {

  constructor(
    @Inject(IPhotoRepository) private photoRepository: IPhotoRepository
  ) { }

  get(id?: number): Observable<PhotoEntity> {
    if (id) {
      return this.photoRepository.get(id);
    } else {
      return this.photoRepository.get();
    }
  }
}