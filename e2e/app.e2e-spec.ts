import { AngularBasePage } from './app.po';

describe('angular-base App', () => {
  let page: AngularBasePage;

  beforeEach(() => {
    page = new AngularBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ac!');
  });
});
