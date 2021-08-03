import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('Welcome to aotBuild!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
// });
describe('dsgdg',function(){
it('page switching',function(done){
  browser.get('http://localhost:4200/');
  browser.sleep(2000);
 browser.executeScript('document.querySelector("#grid_1822616568_0 > div.e-gridpager.e-control.e-pager.e-lib > div.e-pagercontainer > div.e-numericcontainer > div:nth-child(2) > a").click()');
 expect(element(by.className('e-active')).isPresent()).toBe(true);
 browser.sleep(3000);
 done();
});
});