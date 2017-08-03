import { browser, by, element } from 'protractor';

export class AngularBasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ac-root h1')).getText();
  }
}
