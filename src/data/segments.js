const segments = [
  {
    id: 1,
    name: "name",
    segmentNumber: "S1",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "+" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: true },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 2,
    name: "name",
    segmentNumber: "S2",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "+" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 3,
    name: "name",
    segmentNumber: "S3",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 4,
    name: "name",
    segmentNumber: "S4",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 5,
    name: "name",
    segmentNumber: "S5",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 6,
    name: "name",
    segmentNumber: "S6",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 7,
    name: "name",
    segmentNumber: "S7",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 8,
    name: "name",
    segmentNumber: "S8",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 9,
    name: "name",
    segmentNumber: "S9",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 10,
    name: "name",
    segmentNumber: "S10",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 11,
    name: "name",
    segmentNumber: "S11",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 12,
    name: "name",
    segmentNumber: "S12",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 13,
    name: "name",
    segmentNumber: "S13",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 14,
    name: "name",
    segmentNumber: "S14",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 15,
    name: "name",
    segmentNumber: "S15",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 16,
    name: "name",
    segmentNumber: "S16",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 17,
    name: "name",
    segmentNumber: "S17",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 18,
    name: "name",
    segmentNumber: "S18",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 19,
    name: "name",
    segmentNumber: "S19",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 20,
    name: "name",
    segmentNumber: "S20",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],
    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 21,
    name: "name",
    segmentNumber: "S21",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 22,
    name: "name",
    segmentNumber: "S22",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 23,
    name: "name",
    segmentNumber: "S23",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 24,
    name: "name",
    segmentNumber: "S24",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 25,
    name: "name",
    segmentNumber: "S25",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 26,
    name: "name",
    segmentNumber: "S26",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 27,
    name: "name",
    segmentNumber: "S27",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 28,
    name: "name",
    segmentNumber: "S28",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 29,
    name: "name",
    segmentNumber: "S29",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 30,
    name: "name",
    segmentNumber: "S30",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 31,
    name: "name",
    segmentNumber: "S31",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 32,
    name: "name",
    segmentNumber: "S32",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 33,
    name: "name",
    segmentNumber: "S33",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 34,
    name: "name",
    segmentNumber: "S34",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 35,
    name: "name",
    segmentNumber: "S35",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
  {
    id: 36,
    name: "name",
    segmentNumber: "S36",
    type: "X",
    mcm: "NX",
    positioners: [
      { value: "PX", gauge: "" },
      { value: "PX1", gauge: "" },
      { value: "PX2", gauge: "" },
    ],

    borderSensors: [
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
      { value: "ESX", acpChannel: "X", disabled: false },
    ],
  },
];

export default segments;
