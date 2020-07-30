import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent } from './components/edit/edit.component';

// @Injectable()
// export class ExitGuard implements CanDeactivate<EditComponent> {
//   canDeactivate(component: EditComponent): boolean {
//     if(component.eventListiningForm.dirty) {
//       return confirm("dsfsdfdfd")
//     }
//     return true;
//   }
  
// }

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}

export class ExitGuard implements CanDeactivate<ComponentCanDeactivate>{

  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
       
      return component.canDeactivate ? component.canDeactivate() : true;
  }
}