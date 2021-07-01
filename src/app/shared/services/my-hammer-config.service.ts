import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable({
  providedIn: 'root'
})
export class MyHammerConfigService extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
