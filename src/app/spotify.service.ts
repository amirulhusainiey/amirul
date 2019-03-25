import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCcETuFf23B_5U231DBWv2CqEJDqKdLnwkiJbt2i6T6uOdcpGrK292VDGQ58a493h7UkyvSIX0KxYIz7-FdFKnYRfDC2amYc9QfGoQ9Q5DOi8nMAqONQjE3bXUd4yqMcv5TrHwNn2ejdKcAatxoFsgupbHjbQM_Ag"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
