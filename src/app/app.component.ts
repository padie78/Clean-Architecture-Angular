import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoUsecase } from './domain/usecases/photo.service';
import { PhotoEntity } from './domain/entities/photo-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  response$: Observable<PhotoEntity> | undefined;
  data?: PhotoEntity;

  constructor(private photoUsecase: PhotoUsecase){}
  
  title = 'test';

  ngOnInit() {
    this.response$ = this.photoUsecase.get(3);
    this.response$.subscribe(
      (r: PhotoEntity) => {
        this.data = r;
        console.log('data', this.data);
      }
    );
  }
}
