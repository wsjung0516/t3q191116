import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ResDataState, ResDataStateModel } from './res-data.state';
import { ResDataAction } from './res-data.actions';

describe('ResData store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ResDataState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ResDataStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ResDataAction('item-1'));
    const actual = store.selectSnapshot(ResDataState.getState);
    expect(actual).toEqual(expected);
  });

});
