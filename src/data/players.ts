import type { UserID } from "lib/validators";

// Streamers - Map of userId to Twitch channel name
export const userIdToTwitchChannelMap = new Map<UserID, string>([
  ["1ec9eb73-5f16-66bc-a60c-2ee170fbe517", "1437"],
  ["1ec9eb73-96bb-6054-a60c-88cbf9b99152", "alig7777"],
  ["1ec9eb6f-81c4-6ec5-a60c-635d1b4f513a", "alricki"],
  ["1ed41089-7ca0-6b9b-b3a1-16fd10bcb342", "badezir"],
  ["1ecbe994-c4a2-65a4-9e12-4600b50eee96", "bavaris"],
  ["1ec9eb6f-9f8b-6577-a60c-f483cb60a823", "berlin_aog"],
  ["1ec9eb6f-40ce-6a7c-a60c-63318766f483", "baronar"],
  ["1ec9eb6f-60ca-6eef-a60c-468020d5377d", "BlackTaveern"],
  ["1ececc34-3852-6e24-b51b-460c5df91cf0", "bestoko"],
  ["1ecc4a10-b206-6a48-8773-8fae85724fea", "cazcooo"],
  ["1ec9eb7e-69fa-6899-a60c-eea6f3a1ce15", "cucaracha_hd"],
  ["1ec9eb6f-7f4c-6d98-a60c-beca83482725", "dur4zn1ll0"],
  ["1ec9eb6f-57ee-63c7-a60c-7c971d97dd92", "el_azure"],
  ["1ecad0d8-5e7b-686f-b354-289fc53ead42", "elahzul"],
  ["1ec9eb7e-68f1-650c-a60c-2b0fce16426a", "elm0momo"],
  ["1ec9eb6f-7df0-6ed2-a60c-cc7b88a95375", "elprofesergio"],
  ["1ec9eb7e-568a-66dc-a60c-02a59c5e2d79", "enefetero"],
  ["1ec9eb73-66d2-6489-a60c-9a698afa820d", "fedeLaser27"],
  ["1ec9eb77-498e-67d3-a60c-3abb0c131306", "franbx7"],
  ["1ec9eb6f-6e0c-623d-a60c-12e56594dec8", "gorajing"],
  ["1ec9eb6f-953f-69a3-a60c-02f576f2b278", "gutiglass11"],
  ["1ec9eb6f-4a13-6d84-a60c-724fccd67af3", "haca"],
  ["1ec9eb6f-57f4-6c14-a60c-667d677c7590", "hermontv"],
  ["1ec9eb7e-5410-639f-a60c-acf0bf97aca2", "inkaaayyy"],
  ["1ece4d02-d1cd-6192-b735-5b81b530f20d", "iammissarian"],
  ["1ec9eb6f-73b8-67c2-a60c-1336747497d3", "imdipppers"],
  ["1ec9eb6f-613a-6568-a60c-469bedfaeafe", "imurchonkycat"],
  ["1ec9eb6f-7ba0-6102-a60c-acde3d790cd9", "JaleJo_GZ"],
  ["1ec9eb6f-415b-6a9d-a60c-1be81a5a1e1d", "jaybemusic"],
  ["1ec9eb6f-7e03-6456-a60c-fcb1d022abf5", "jaymazing01"],
  ["1ec9eb6f-552f-620f-a60c-d09bba4eff05", "ljcobs"],
  ["1ec9eb6f-60fc-6bf3-a60c-332e82a3cec1", "Jonakinho"],
  ["1ec9eb7b-3043-62cf-a60c-955a50290b1f", "katu_frnandz"],
  ["1ece4d09-fd0e-6a81-837b-e6b23b8ec5a4", "kro_tez"],
  ["1ec9eb7b-4669-6638-a60c-34dfb3ad726b", "kyroh"],
  ["1ece8730-f719-651d-b06b-5afd90caf2d3", "LeBaker"],
  ["1ec9eb6f-6a11-69f8-a60c-ebeb76b7fac3", "malugo96"],
  ["1ec9eb6f-619e-6a9b-a60c-3cad4865e072", "mrroot86"],
  ["1ec9eb7e-5626-6b03-a60c-6eccfb577b31", "mugigarca"],
  ["1ec9eb6f-4486-6687-a60c-faab378b1137", "notplusone"],
  ["1ec9eb7e-6711-6ca6-a60c-2a42d00faacb", "oceegee"],
  ["1ed2ae58-bf71-6ddd-b498-15e4a8e7a350", "papiyulen"],
  ["1ec9eb6f-80b7-6825-a60c-9bd23341ecef", "pengfa1"],
  ["1ec9eb6f-a66b-69f5-a60c-834ead3468c8", "polaco_axie"],
  ["1ec9eb6f-6ebb-6962-a60c-eef9094eb8e8", "qu3st"],
  ["1ecc19a3-bbb8-6d9c-8fae-64a00168e792", "radioralo"],
  ["1ec9eb6f-6c80-6bd7-a60c-1bbda1428949", "rojankhzxr"],
  ["1ec9eb7e-4202-6dd5-a60c-d52367b7ddbb", "russauro_nft"],
  ["1ecfa395-cdc9-63b6-bccd-f40126ee860f", "sarraf_arg"],
  ["1ec9eb6f-5be3-61e4-a60c-cb0376efa2ef", "Skull"],
  ["1ed098eb-6186-6ba4-8159-c6e50057db08", "SequinoxTV"],
  ["1ec9eb6f-62c5-62a2-a60c-408f4d4f93f1", "snoopy_axie"],
  ["1ed02a92-60b9-6f0c-ba60-fb063d5d9990", "spamandrice"],
  ["1ec9eb6f-4549-6562-a60c-57af5fe1c849", "spriggantv1"], // rengoku
  ["1ec9eb7e-5d0e-622d-a60c-2a19fb1f24c5", "SrNearly"],
  ["1ec9eb6f-45c0-658e-a60c-67ea302bb316", "Stark_axie"],
  ["1ec9eb6f-45a3-6bed-a60c-e4ade6252d6b", "Streamdubled"],
  ["1ec9eb6f-5030-6b1e-a60c-6c7190e8d5e1", "strykens"],
  ["1ec9eb6f-46de-6756-a60c-c1d66452c7f5", "tapiocaaxie"],
  ["1ec9eb6f-419c-60e0-a60c-4949fd1900c9", "titokliber"],
  ["1ed44394-4641-6163-b4d6-68e87f9bb193", "vinao_games"],
  ["1ec9eb6f-548f-6c55-a60c-cbad9bd97791", "viruta_v"],
  ["1ec9eb7e-5ed8-655c-a60c-ec2b3f526a70", "xero_"],
  ["1ec9eb6f-8c45-63c1-a60c-cda22caa372b", "xkerod"],
]);

// Skymavis Team Members - Map of userId to Skymavis Team Member name
export const userIdToSkymavisTeamMember = new Map<UserID, string>([
  ["1ec9eb73-7075-6fe2-a60c-54a696076250", "Hail"],
  ["1ecb1bf8-ca7d-62ad-b155-c2eb025302ea", "Jaatster"],
  ["1ec9eb6f-3f61-6567-a60c-ede9a7e67c63", "Jihoz"],
  ["1ec9eb6f-9d54-6afb-a60c-f24f19577ace", "Masamune"],
  ["1ec9eb6f-41ae-61da-a60c-d217fa65f27f", "Shade"],
  ["1ec9eb6f-557d-6afe-a60c-4a64997800ae", "wehmoen"],
  ["1ec9eb6f-3f63-6638-a60c-2881a24aafb8", "ZimmahTV"],
  ["1ec9eb6f-a02c-6483-a60c-4178896e7c05", "Zoser"],
]);
