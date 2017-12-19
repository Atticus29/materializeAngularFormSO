import { MaterializeFormMCVPage } from './app.po';

describe('materialize-form-mcv App', () => {
  let page: MaterializeFormMCVPage;

  beforeEach(() => {
    page = new MaterializeFormMCVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
