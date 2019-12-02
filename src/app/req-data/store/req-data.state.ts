import { State, Action, Selector, StateContext } from '@ngxs/store';
import {LoadCropImage, ReqDataAction} from './req-data.actions';

export interface ReqDataStateModel {
  cropImage: string;
  loading: boolean;
  loaded: boolean;
}
const CropDefaultState: ReqDataStateModel = {
  cropImage: '',
  loading: false,
  loaded: false
};
@State<ReqDataStateModel>({
  name: 'reqData',
  defaults: CropDefaultState
})
export class ReqDataState {

  @Selector()
  public static getCropImage(state: ReqDataStateModel) {
    return state.cropImage;
  }

  @Action(LoadCropImage)
  public laodCropImage(ctx: StateContext<ReqDataStateModel>, { payload }: LoadCropImage) {
    const stateModel = ctx.getState();
    stateModel.cropImage = payload;
    ctx.setState(stateModel);
  }
}
