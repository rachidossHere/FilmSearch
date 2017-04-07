import { FilmsearchPage } from './app.po';

describe('filmsearch App', () => {
  let page: FilmsearchPage;

  beforeEach(() => {
    page = new FilmsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
