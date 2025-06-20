// file src/lib/microsoftGraph.js
import * as msal from '@azure/msal-browser'

/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
  scopes: ["User.Read"]
}

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})

export async function signInAndGetUser () {
  const user = { nom: "dupont", prenom: "francois" }
  try {
    await msalInstance.initialize()
    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)

    return user

  } catch (error) {
    if (error.errorCode === "user_cancelled" || error.errorCode === "popup_closed") {
      console.warn("Connexion annulée par l'utilisateur.")
      return user
    } else {
      console.error("Erreur MSAL :", error)
     
       return user
      }
  }
}