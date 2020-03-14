import { MatSnackBarConfig } from '@angular/material/snack-bar'

export const defaultSnackBarConfig: MatSnackBarConfig = {
  duration: 2000,
  panelClass: ['app-snack-bar'],
}

export const successSnackBarConfig: MatSnackBarConfig = {
  duration: 2000,
  announcementMessage: 'Success.',
  panelClass: ['app-snack-bar', 'app-snack-bar_success'],
  verticalPosition: 'top',
}

export const errorSnackBarConfig: MatSnackBarConfig = {
  duration: 10000,
  announcementMessage: 'An unknown error occurred.',
  panelClass: ['app-snack-bar', 'app-snack-bar_error'],
  verticalPosition: 'top',
}
