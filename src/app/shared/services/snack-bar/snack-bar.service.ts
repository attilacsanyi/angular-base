import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material';

@Injectable()
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, duration = 5000, action?: string) {
    const config: MatSnackBarConfig = {
      duration,
      horizontalPosition: (action ? 'left' : 'center') as MatSnackBarHorizontalPosition
    };
    return this.snackBar.open(message.toLocaleUpperCase(), action, config);
  }
}
