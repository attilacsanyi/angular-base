import { Action } from '@ngrx/store';

const modulePrefix = '[Home]';

export class LoadTitleAction implements Action {
  readonly type = `${modulePrefix} Load title`;
  constructor(public title: string) { }
}

export type Actions =
  LoadTitleAction;
