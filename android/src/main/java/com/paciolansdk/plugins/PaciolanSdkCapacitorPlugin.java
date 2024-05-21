package com.paciolansdk.plugins;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.util.Log;

import com.paciolan.mobileSDK.MobileSDK;
import com.paciolan.mobileSDK.PaciolanReactPackage;
import com.paciolan.mobileSDK.PaciolanSDKAndroidUtils;

@CapacitorPlugin(name = "PaciolanSdkCapacitor")
public class PaciolanSdkCapacitorPlugin extends Plugin {
  @PluginMethod()
  public void show(PluginCall call) {
    String config = call.getString("initialConfigs");
    
    getBridge().getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        MobileSDK.startPaciolanActivity(getActivity(), config);
      }
    });

    JSObject ret = new JSObject();
    ret.put("config", config);
    call.success(ret);
  }

  @PluginMethod()
  public static void appLaunched() {
      PaciolanSDKAndroidUtils module = PaciolanReactPackage.getMReactContext()
        .getNativeModule(PaciolanSDKAndroidUtils.class);
      if (module != null) {
          module.emitEvent("AppLaunchedEvent", "");
      }
  }

  @PluginMethod()
  public static void navAwayFromPac(callback: UserChoiceCallback) {
    PaciolanSDKAndroidUtils module = PaciolanReactPackage.getMReactContext()
      .getNativeModule(PaciolanSDKAndroidUtils.class);
      if (module != null) {
          module.emitEvent("navAwayEvent", "message from canNavAway on Tab Pressed")
      }
    this.userChoiceCallback = callback
  }
}
