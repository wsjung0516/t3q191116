import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ReqDataState, ReqDataStateModel } from './req-data.state';
import { ReqDataAction } from './req-data.actions';

describe('ReqData store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ReqDataState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ReqDataStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ReqDataAction('item-1'));
    const actual = store.selectSnapshot(ReqDataState.getState);
    expect(actual).toEqual(expected);
  });

});
