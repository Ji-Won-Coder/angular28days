import { CanActivateFn } from '@angular/router';

export const whithoutsaveGuard: CanActivateFn = (route, state) => {
  return true;
};
