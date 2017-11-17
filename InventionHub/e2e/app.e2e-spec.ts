import { InventionHubPage } from './app.po';

describe('invention-hub App', function() {
  let page: InventionHubPage;

  beforeEach(() => {
    page = new InventionHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
