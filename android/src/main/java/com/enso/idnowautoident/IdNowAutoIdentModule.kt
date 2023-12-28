package com.enso.idnowautoident
import de.idnow.core.IDnowConfig
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import de.idnow.core.IDnowSDK
import expo.modules.kotlin.AppContext

class IdNowAutoIdentModule : Module() {

  private lateinit var idnowSdk: IDnowSDK
  override fun definition() = ModuleDefinition {
    Name("IdNowAutoIdent")

    Function("init") { language: String, promise: Promise ->
      promise.resolve("init stuff " + language)
    }

    AsyncFunction("start") { token: String, language: String, promise: Promise ->
      promise.resolve("Hello there "+ token + " " + language)
    }
  }
}

