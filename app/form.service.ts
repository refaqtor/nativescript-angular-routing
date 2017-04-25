import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormService {

    private dataset = {
        "title": "Basic Data",
        "uuid": "28e0cc3d-eab5-4b56-922e-3e511163c501",
        "controls": [{
            "name": "f990296a-ca87-4c2e-a8fa-52a7957d6aca",
            "label": {
                "eng": "Type"
            },
            "hint": {
                "eng": ""
            },
            "defaultValue": "Baseline",
            "readOnly": true,
            "required": false,
            "relevance": "",
            "constraint": "",
            "destination": "",
            "calculate": "",
            "length": false,
            "invalidText": {

            },
            "type": "inputText"
        },
        {
            "name": "7213e5f4-a174-408b-bdec-7aaa0eb3160f",
            "label": {
                "eng": "Technician"
            },
            "hint": {

            },
            "defaultValue": "",
            "readOnly": false,
            "required": false,
            "relevance": "",
            "constraint": "",
            "destination": "",
            "calculate": "",
            "length": false,
            "invalidText": {

            },
            "type": "inputText"
        },
        {
            "name": "c874bbda-5c36-4f59-9471-db39a01fcc58",
            "label": {
                "eng": "Date"
            },
            "hint": {

            },
            "defaultValue": "",
            "readOnly": false,
            "required": true,
            "relevance": "",
            "constraint": "",
            "destination": "",
            "calculate": "",
            "range": false,
            "invalidText": {

            },
            "kind": "Full Date",
            "type": "inputDate"
        },
        {
            "name": "71af59a9-844e-432e-97b5-6204bd6a160f",
            "label": {
                "eng": "Question Bank"
            },
            "loop": false,
            "fieldList": true,
            "relevance": "",
            "type": "group",
            "children": [{
                "name": "e2eeaa9b-c4ee-4383-815c-07c0a4ce02dd",
                "label": {
                    "eng": "Did panels and fasteners meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "No",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": "No"
                    },
                    "val": "false"
                },
                {
                    "text": {
                        "eng": "Yes"
                    },
                    "val": "true"
                }
                ],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "2011419c-3355-4186-b0f8-8a9128a1b035",
                "label": {
                    "eng": "Did VFD meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "Not Applicable",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": "Not Applicable"
                    },
                    "val": "na"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "b10c4f90-ad08-44d3-b03a-3d170f453636",
                "label": {
                    "eng": "Did piping/ductwork/plenum meet program requirements?"
                },
                "hint": {
                    "eng": ""
                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "22f9f034-9cb5-46eb-bbed-475650682efb",
                "label": {
                    "eng": "Did filters and housing meet program requirements "
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "e05d52c8-c099-41d0-9c3b-1746e61ce10a",
                "label": {
                    "eng": "Did the drain pan and p-trap meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "97509342-8225-4f72-9029-d7273ae37819",
                "label": {
                    "eng": "Did the control box meet the program requirements"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "125a1369-ac21-4f92-8edd-f9e79c340696",
                "label": {
                    "eng": "Did motor, belts and wheel meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "9fd55e14-6193-49d5-8820-ea491814eda3",
                "label": {
                    "eng": "Is blower belt driven"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "00760b38-6ded-427a-8eb5-42c7b53a65f0",
                "label": {
                    "eng": "Does unit have field serviceable bearings"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "9814736f-4adb-4c2c-9dc4-61dd0b1ed5db",
                "label": {
                    "eng": "Did the Gas/ Heat section meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "83328773-e9f0-4f02-9db8-8407aadb74f1",
                "label": {
                    "eng": "Did you replace the thermostat"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "52094d10-bbc4-4889-9e79-0515f38701fa",
                "label": {
                    "eng": "Did the control system meet program requirements"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "c3946cff-7c52-46f9-8073-8292a0615d23",
                "label": {
                    "eng": "Was original economizer an ADEC"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "8fd1277b-0d53-4081-ac16-eb10078babc3",
                "label": {
                    "eng": "Is the economizer control functioning properly"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "436a438e-1baf-43f9-87fe-76d152491412",
                "label": {
                    "eng": "Are the economizer components functioning properly"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "a5c88591-4fc2-42a7-a4c7-3985465cee69",
                "label": {
                    "eng": "Refrigerant system tested and results are"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "171a9d80-53ce-427b-b231-3501416db7d5",
                "label": {
                    "eng": "Will you be completing refrigerant system service"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "2b7c8cd3-2451-4b4c-a1ea-0310d5f9e510",
                "label": {
                    "eng": "Will you be upgrading unit to EVC"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            },
            {
                "name": "15936efd-b21e-40bc-b2d7-fd9abdbe3ac8",
                "label": {
                    "eng": "Were non covered repairs needed"
                },
                "hint": {

                },
                "defaultValue": "",
                "readOnly": false,
                "required": true,
                "relevance": "",
                "constraint": "",
                "destination": "",
                "calculate": "",
                "options": [{
                    "text": {
                        "eng": ""
                    },
                    "val": "No"
                }],
                "appearance": "Default",
                "type": "inputSelectOne"
            }
            ]
        },
        {
            "name": "94ed4f6e-afbc-4488-8e25-53d03e1ee5ad",
            "label": {
                "eng": "Quality Control"
            },
            "loop": false,
            "fieldList": false,
            "relevance": "if user/state warrants visibility",
            "type": "group",
            "children": [{
                "name": "89ae1061-4ecf-49ac-80e8-cc5e5d28172c",
                "label": {
                    "eng": "Review"
                },
                "loop": false,
                "fieldList": true,
                "relevance": "",
                "type": "group",
                "children": []
            },
            {
                "name": "89e07bb4-3626-4196-b8d7-ed923d910996",
                "label": {
                    "eng": "Response"
                },
                "loop": false,
                "fieldList": true,
                "relevance": "",
                "type": "group",
                "children": []
            }
            ]
        }
        ],
        "metadata": {
            "activeLanguages": ["eng"],
            "optionsPresets": []
        }
    }

    constructor() { }

    getModel(uuid: string)  {
        return this.dataset; //for uuid
    }

    getMarkup(uuid: string){
             return "<ActionBar title='Data' class='action-bar'></ActionBar>\
<StackLayout class='p-20 form' [formGroup]='contactForm'>\
    <Label text='First Name: ' class='h3'></Label>\
    <TextField formControlName='firstName' class='input input-border'></TextField>\
    <Label text='Last Name: ' class='h3'></Label>\
    <TextField formControlName='lastName' class='input input-border'></TextField>\
    <Button text='Submit' (tap)='onSubmit()'></Button>\
</StackLayout>"



       // return this.dataset; //for uuid
    }


}