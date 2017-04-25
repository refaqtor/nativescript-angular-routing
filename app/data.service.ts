import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private dataset = {
    "f7ff5f29-21f8-4df3-9f50-4d1819679537": {
        "f990296a-ca87-4c2e-a8fa-52a7957d6aca": "Baseline",
        "7213e5f4-a174-408b-bdec-7aaa0eb3160f": "Larry Laffer",
        "c874bbda-5c36-4f59-9471-db39a01fcc58": "1492031132139",
        "e2eeaa9b-c4ee-4383-815c-07c0a4ce02dd": "0",
        "2011419c-3355-4186-b0f8-8a9128a1b035": "0",
        "b10c4f90-ad08-44d3-b03a-3d170f453636": "0",
        "22f9f034-9cb5-46eb-bbed-475650682efb": "0",
        "e05d52c8-c099-41d0-9c3b-1746e61ce10a": "0",
        "97509342-8225-4f72-9029-d7273ae37819": "0",
        "125a1369-ac21-4f92-8edd-f9e79c340696": "0",
        "9fd55e14-6193-49d5-8820-ea491814eda3": "0",
        "00760b38-6ded-427a-8eb5-42c7b53a65f0": "0",
        "9814736f-4adb-4c2c-9dc4-61dd0b1ed5db": "0",
        "83328773-e9f0-4f02-9db8-8407aadb74f1": "0",
        "52094d10-bbc4-4889-9e79-0515f38701fa": "0",
        "c3946cff-7c52-46f9-8073-8292a0615d23": "0",
        "8fd1277b-0d53-4081-ac16-eb10078babc3": "0",
        "436a438e-1baf-43f9-87fe-76d152491412": "0",
        "a5c88591-4fc2-42a7-a4c7-3985465cee69": "0",
        "171a9d80-53ce-427b-b231-3501416db7d5": "0",
        "2b7c8cd3-2451-4b4c-a1ea-0310d5f9e510": "0",
        "15936efd-b21e-40bc-b2d7-fd9abdbe3ac8": "0"
    }
  }

  constructor() { }

  getData(uuid: string) {
    return this.dataset; //for uuid
  }

}