import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ResDataAction } from './res-data.actions';

export interface ResDataStateModel {
  items: string[];
}

@State<ResDataStateModel>({
  name: 'resData',
  defaults: {
    items: []
  }
})
export class ResDataState {

  @Selector()
  public static getState(state: ResDataStateModel) {
    return state;
  }

  @Action(ResDataAction)
  public add(ctx: StateContext<ResDataStateModel>, { payload }: ResDataAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
