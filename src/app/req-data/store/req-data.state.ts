import { State, Action, Selector, StateContext } from '@ngxs/store';
import {StartAnalyze, CompleteAnalyzing, ErrorAnalyzing, ReqDataAction, SaveCroppedImage, ResetState} from './req-data.actions';
import {ResImageService} from "../../services/res-image.service";
import {catchError, map, tap} from "rxjs/operators";
import {Navigate} from "@ngxs/router-plugin";

export interface ReqDataStateModel {
  cropImage: {
    image: string,
    height: number,
    width: number
  };
  loading: boolean;
  loaded: boolean;
  result_images: any[];
  error: string
}
const CropDefaultState: ReqDataStateModel = {
  cropImage: {
   image: '',
   height: 0,
   width: 0
  },
  loading: false,
  loaded: false,
  result_images: [],
  error: ''
};
@State<ReqDataStateModel>({
  name: 'reqData',
  defaults: CropDefaultState
})
export class ReqDataState {
  constructor( private resImageService: ResImageService,
      ) {}
  @Selector()
  public static getCropImage(state: ReqDataStateModel) {
    return state.cropImage;
  }
  @Selector()
  public static getAnalyzeResult(state: ReqDataStateModel) {
    return state.result_images;
  }
  @Selector()
  public static getLoading(state: ReqDataStateModel) {
    return state.loading;
  }
  @Selector()
  public static getLoaded(state: ReqDataStateModel) {
    return state.loaded;
  }
  @Selector()
  public static getError(state: ReqDataStateModel) {
    return state.error;
  }

  @Action(ResetState)
  public resetState({patchState}: StateContext<ReqDataStateModel>, action: ResetState) {
    patchState({
      loading: false,
      loaded: false
    });
  }
  @Action(SaveCroppedImage)
  public saveCroppedImage({dispatch, patchState}: StateContext<ReqDataStateModel>, {payload }: SaveCroppedImage) {
    patchState({
      loaded: true,
      loading: false,
      cropImage: payload,
    });
  }
  @Action(StartAnalyze)
  public startAnalyze({dispatch, patchState}: StateContext<ReqDataStateModel>, {payload }: StartAnalyze) {
    patchState({
      loaded: true,
      loading: true
    });
    return this.resImageService.postReqImage(payload).pipe(
      map( images => dispatch( new CompleteAnalyzing({images}))),
      catchError( error => {
        return dispatch( new ErrorAnalyzing(error))
      })
    )
  }
  @Action(CompleteAnalyzing)
  public completeAnalyze({dispatch, patchState}: StateContext<ReqDataStateModel>, {payload }: CompleteAnalyzing) {
    patchState({
      loaded: true,
      loading: false,
      result_images: payload
    });
    dispatch(new Navigate(['/res-data']))
  }
  @Action(ErrorAnalyzing)
  public errorAnalyze({dispatch, patchState}: StateContext<ReqDataStateModel>, {payload }: ErrorAnalyzing) {
    patchState({
      error: payload
    });
  }
}
