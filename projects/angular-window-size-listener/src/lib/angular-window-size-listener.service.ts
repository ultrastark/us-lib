import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AngularWindowSizeListenerService {
  xs: BehaviorSubject<any>
  sm: BehaviorSubject<any>
  md: BehaviorSubject<any>
  lg: BehaviorSubject<any>
  xl: BehaviorSubject<any>

  private _sm = 576
  private _md = 768
  private _lg = 992
  private _xl = 1200
  private _xxl = 1500

  private _xsTemp = false
  private _smTemp = false
  private _mdTemp = false
  private _lgTemp = false
  private _xlTemp = false

  windowInnerWidth: number

  constructor() {
    this.xs = new BehaviorSubject([])
    this.sm = new BehaviorSubject([])
    this.md = new BehaviorSubject([])
    this.lg = new BehaviorSubject([])
    this.xl = new BehaviorSubject([])

    this.xs.next(false)
    this.sm.next(false)
    this.md.next(false)
    this.lg.next(false)
    this.xl.next(false)

    window.addEventListener('resize', () => {
      let width = window.innerWidth
      this.windowInnerWidth = width

      if (width > this._sm - 1) {
        if (this._xsTemp) {
          this._xsTemp = false
          this.xs.next(false)
        }
      } else {
        if (!this._xsTemp) {
          this._xsTemp = true
          this.xs.next(true)
        }
      }

      if (width > this._md - 1) {
        if (this._smTemp) {
          this._smTemp = false
          this.sm.next(false)
        }
      } else {
        if (!this._smTemp) {
          this._smTemp = true
          this.sm.next(true)
        }
      }

      if (width > this._lg - 1) {
        if (this._mdTemp) {
          this._mdTemp = false
          this.md.next(false)
        }
      } else {
        if (!this._mdTemp) {
          this._mdTemp = true
          this.md.next(true)
        }
      }

      if (width > this._xl - 1) {
        if (this._lgTemp) {
          this._lgTemp = false
          this.lg.next(false)
        }
      } else {
        if (!this._lgTemp) {
          this._lgTemp = true
          this.lg.next(true)
        }
      }

      if (width > this._xxl - 1) {
        if (this._xlTemp) {
          this._xlTemp = false
          this.xl.next(false)
        }
      } else {
        if (!this._xlTemp) {
          this._xlTemp = true
          this.xl.next(true)
        }
      }
    })
  }
}
