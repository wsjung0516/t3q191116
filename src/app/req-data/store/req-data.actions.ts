export class ReqDataAction {
  public static readonly type = '[ReqData] Add item';
  constructor(public payload: string) {}
}
export class SaveCroppedImage {
  public static readonly type = '[ReqData] Save Cropped Image';
  constructor(public payload: any) {}
}
export class ResetState {
  public static readonly type = '[ReqData] Reset Cropped Image';
}
export class StartAnalyze {
  public static readonly type = '[ReqData] Start Analyze';
  constructor(public payload: any) {}
}
export class CompleteAnalyzing {
  public static readonly type = '[ReqData] Complete Analyze';
  constructor(public payload: any) {}
}
export class ErrorAnalyzing {
  public static readonly type = '[ReqData] Error Analyze';
  constructor(public payload: string) {}
}
