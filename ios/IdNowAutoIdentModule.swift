import ExpoModulesCore
import IDNowSDKCore
public class IdNowAutoIdentModule: Module {

  public func definition() -> ModuleDefinition {
    Name("IdNowAutoIdent")
    AsyncFunction("start") { (token: String, preferredLanguage: String, promise: Promise) in
      if let rootViewController = UIApplication.shared.delegate?.window??.rootViewController {
        IDNowSDK.shared.start(token: token, preferredLanguage:preferredLanguage, fromViewController: rootViewController, listener:{(result: IDNowSDK.IdentResult.type, statusCode: IDNowSDK.IdentResult.statusCode, message: String) in
                if result == .ERROR {
                    promise.resolve(statusCode.description)
                } else if result == .FINISHED {
                    promise.resolve("finished")
                }
        })
      } else {
          promise.resolve("failed to identify rootViewControler")
      }
    }
  }
}
