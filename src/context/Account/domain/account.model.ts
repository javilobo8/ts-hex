export class AccountModel {
  constructor(
    public summonerName: string,
    public region: string,
    public id?: string,
    public accountId?: string,
    public puuid?: string,
    public summonerLevel?: number,
    public profileIconId?: number,
    public revisionDate?: number,
  ) { }

  static fromJson(json: any): AccountModel {
    return new AccountModel(
      json.summonerName,
      json.region,
      json.id,
      json.accountId,
      json.puuid,
      json.summonerLevel,
      json.profileIconId,
      json.revisionDate,
    );
  }

  toPrimitive() {
    return {
      summonerName: this.summonerName,
      region: this.region,
      id: this.id,
      accountId: this.accountId,
      puuid: this.puuid,
      summonerLevel: this.summonerLevel,
      profileIconId: this.profileIconId,
      revisionDate: this.revisionDate,
    };
  }
}