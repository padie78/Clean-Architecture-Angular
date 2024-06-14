import { Observable } from 'rxjs';
import { PhotoEntity } from '../../entities/photo-entity';

export abstract class IPhotoRepository {
  abstract get(id?: number): Observable<PhotoEntity>;
}