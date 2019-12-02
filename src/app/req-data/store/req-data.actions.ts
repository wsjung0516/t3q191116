export class ReqDataAction {
  public static readonly type = '[ReqData] Add item';
  constructor(public payload: string) { }
}
export class LoadCropImage {
  public static readonly type = '[ReqData] Load Crop Image';
  constructor(public payload: string) { }
}
