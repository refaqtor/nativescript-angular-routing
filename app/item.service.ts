import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 0, uuid: "f7ff5f29-21f8-4df3-9f50-4d1819679537", label: "bldg1 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 1, uuid: "a3dca747-2a06-4aaa-b6f1-e41d971a3177", label: "bldg1 - hvac2 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 2, uuid: "0df6dba3-357a-4fad-8104-94f057dba3a4", label: "bldg1 - hvac3 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 3, uuid: "4bd71de6-b0a1-47dc-ae87-c4cb2012658c", label: "bldg1 - hvac4 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 4, uuid: "c638ea66-556d-4840-b10e-e89016cb4bd6", label: "bldg2 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 5, uuid: "5ecb36bf-eda4-46b1-90d2-0e5817cc0808", label: "bldg2 - hvac2 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 6, uuid: "1b50b204-0eed-4d57-87f6-69dcca7a3add", label: "bldg3 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 7, uuid: "06fec775-c75e-4338-b18f-3b8965f5ddea", label: "bldg4 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 8, uuid: "db9c0aff-8674-4cf6-bd06-73631124c140", label: "bldg5 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" },
        { id: 9, uuid: "5da67004-f217-4d7b-9cad-4ebd540ce6ec", label: "bldg6 - hvac1 - job1", form: "28e0cc3d-eab5-4b56-922e-3e511163c501" }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
