import { TodoReduxPage } from './app.po';

describe('todo-redux App', function() {
  let page: TodoReduxPage;

  beforeEach(() => {
    page = new TodoReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
