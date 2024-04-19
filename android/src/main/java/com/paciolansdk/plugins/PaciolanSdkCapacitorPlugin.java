package com.paciolansdk.plugins;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.util.Log;

import com.paciolan.mobileSDK.MobileSDK;

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
}
