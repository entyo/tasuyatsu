import { TasuyatsuPage } from './app.po';

describe('tasuyatsu App', () => {
  let page: TasuyatsuPage;

  beforeEach(() => {
    page = new TasuyatsuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
