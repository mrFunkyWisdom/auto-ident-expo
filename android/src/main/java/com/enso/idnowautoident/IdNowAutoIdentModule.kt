package com.enso.idnowautoident
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import com.idnow.sdk.IDnowConfig
import com.idnow.sdk.IDnowResult
import com.idnow.sdk.IDnowSDK

class IdNowAutoIdentModule : Module() {

  private lateinit var idnowSdk: IDnowSDK
  override fun definition() = ModuleDefinition {
    Name("IdNowAutoIdent")

    Function("init") { language: String ->
      val idnowConfig = IDnowConfig.Builder.getInstance()
              .withLanguage(language)
              .build()

      idnowSdk = IDnowSDK.getInstance()
      idnowSdk.initialize(this, idnowConfig)
    }

    AsyncFunction("start") { token: String, language: String, promise: Promise ->
      promise.resolve("Hello there "+ token + " " + language)
    }
  }
}
