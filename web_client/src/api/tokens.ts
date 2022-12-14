import { goto } from "$app/navigation";
import * as jose from "jose"
import { db } from "../data/database";
import { URLS } from ".";
import { writable } from "svelte/store";


export const accessTokenStorage = writable<string | null>(null);

async function getAccessToken() {
    let accessToken: string | null = null;
    let unsubscribe = accessTokenStorage.subscribe(value => {
        accessToken = value;
    });
    unsubscribe()

    if (accessToken) {
        let payload = jose.decodeJwt(accessToken);
        let expDate = new Date(payload.exp! * 1000);
        let now = new Date();
        let expired = expDate < now;
        if (!expired) {
            return accessToken;
        }
        // use refresh token
    }
    // use refresh token
    // send post request to get new access token
    let response = await fetch(URLS.refresh_token, { method: "POST", credentials: "include" });
    if (response.ok) {
        // got new access token successfully, save it to svelte store
        let json: { access_token: string } = await response.json();
        accessTokenStorage.set(json.access_token)
        return json.access_token;
    }
    // no access token and no refresh token
    // send user to login page
    // also delete database
    await db.delete();
    await db.open();
    // clear lastPulled from local storage
    localStorage.removeItem("lastPulled");
    // goto login if not already there
    if (window.location.pathname !== "/login") {
        await goto("/login");
    }
    // done
}

export async function getHeaders() {
    let accessToken = await getAccessToken();
    return {
        "Authorization": "Bearer " + accessToken,
        "Content-Type": "application/json",
    }
}
