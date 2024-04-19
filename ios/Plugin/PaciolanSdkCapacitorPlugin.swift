import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PaciolanSdk)
public class PaciolanSdk: CAPPlugin {
    @objc func show(_ call: CAPPluginCall) {
        let initialConfigs = call.getString("initialConfigs") ?? ""

        guard let viewController = self.bridge?.viewController else {
            call.reject("Unable to get the view controller.")
            return
        }
        
        DispatchQueue.main.async {
            let paciolanSDKViewController = PaciolanSDKViewController()
            paciolanSDKViewController.modalPresentationStyle = .overCurrentContext
            paciolanSDKViewController.view.frame = CGRect(
                x: 0,
                y: 0,
                width: UIScreen.main.bounds.width,
                height: UIScreen.main.bounds.height * 0.5
            )
            viewController.present(paciolanSDKViewController, animated: true, completion: nil)
        }
              
        call.resolve([
            "initialConfigs": initialConfigs,
        ])
    }
    @objc func navAwayFromPac(_ call: CAPPluginCall) {
        let paciolanSDKViewController = PaciolanSDKViewController()
        paciolanSDKViewController.navAway(
            fromPac: nil,
            resolver: { (result) in
                if let safeResult = result {
                    call.resolve([
                        "result": safeResult
                    ])
                } else {
                    call.resolve()
                }
            },
            rejecter: { (code, message, error) in
                call.reject(message ?? "An error occurred", code, error)
            }
        )
    }
}
