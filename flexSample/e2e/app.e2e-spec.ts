import { FlexSamplePage } from './app.po';

describe('flex-sample App', () => {
  let page: FlexSamplePage;

  beforeEach(() => {
    page = new FlexSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
