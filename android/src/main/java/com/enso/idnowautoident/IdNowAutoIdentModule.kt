package com.enso.idnowautoident

import de.idnow.core.IDnowConfig
import de.idnow.core.IDnowResult
import de.idnow.core.IDnowSDK
import de.idnow.core.IDnowSDK.IDnowResultListener
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class IdNowAutoIdentModule : Module() {

  private lateinit var idnowSdk: IDnowSDK
  override fun definition() = ModuleDefinition {
    Name("IdNowAutoIdent")

    AsyncFunction("init") { language: String, promise: Promise ->
      val activity = appContext.activityProvider?.currentActivity
      val idnowConfig = IDnowConfig.Builder.getInstance()
              .withLanguage(language)
              .build()

      idnowSdk = IDnowSDK.getInstance()
      if (activity != null) {
        idnowSdk.initialize(activity, idnowConfig)
        promise.resolve("initialized sdk with language " + language)
      } else {
        promise.resolve("Failed to resolve idnow init activity is empty")
      }

    }

    AsyncFunction("start") { token: String, language: String, promise: Promise ->
      val listener = IDnowResultListener {it: IDnowResult ->
        promise.resolve(it.toString()+ " " + language)
      }
      idnowSdk.startIdent(token, listener)
    }
  }
}

