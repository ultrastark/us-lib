# Angular window size listener Service
*ALPHA VERSION*

Service used to know the actual size of the screen

Use the same variable as bootstrap

## Getting Started
``npm i @ultrastark/angular-window-size-listener``

And then, in your component.ts, add the following line

```
  import { AngularWindowSizeListenerService } from 'app/core/services/angular-window-size-listener.service'
  import { Subject } from 'rxjs'
  import { takeUntil } from 'rxjs/operators'

  /.../

  private _unsubscribeAll: Subject<any>

  constructor(private windowSizeService: angularWindowSizeListener) {
    this._unsubscribeAll = new Subject()
  }

  ngOnInit(): void {
    this.windowSizeService.lg.pipe(takeUntil(this._unsubscribeAll)).subscribe((bool) => {
      if(bool) {
        // Do something on the lg size
      } else {
        // less than lg size
      }
    })

    this.windowSizeService.md.pipe(takeUntil(this._unsubscribeAll)).subscribe((bool) => {
      if(bool) {
        // Do something on the md size
      } else {
        // less than md size
      }
    })
  }

    ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
      this._unsubscribeAll.next()
      this._unsubscribeAll.complete()
    }

```
