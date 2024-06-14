import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IPhotoRepository } from './domain/interfaces/repository/iPhoto-repository';
import { PhotoApiService } from './apis/photo-api-delay.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    { provide: IPhotoRepository, useClass: PhotoApiService }
]};
