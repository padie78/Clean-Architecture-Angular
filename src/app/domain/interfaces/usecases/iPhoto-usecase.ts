import { Observable } from 'rxjs';
import { PhotoEntity } from '../../entities/photo-entity';

export abstract class IPhotoUsecase {
  abstract get(id?: number): Observable<PhotoEntity>;
}