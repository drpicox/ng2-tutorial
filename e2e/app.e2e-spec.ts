import { Ng2HerosPage } from './app.po';

describe('ng2-heros App', function() {
  let page: Ng2HerosPage;

  beforeEach(() => {
    page = new Ng2HerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
