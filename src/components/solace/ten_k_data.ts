import type { StaticImageData } from "next/image";
import runImg from "../../../public/images/home/run_solace.png";

export type TimelineEntry = {
  year: number;
  side: "left" | "right";
  title: string;
  description: string;
  time: string;
  location: string;
  image: StaticImageData;
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: 2020,
    side: "left",
    title: "Marathon for Mental Health",
    description:
      "Raised funds for mental health initiatives and ran alongside community partners to spread awareness and reduce stigma.",
    time: "48:32",
    location: "Toronto, Canada",
    image: runImg,
  },
  {
    year: 2021,
    side: "right",
    title: "Waterfront 10K",
    description:
      "Pushed for a new personal best on a flat course with thousands cheering along the lake—proof that training compounds.",
    time: "48:42",
    location: "Toronto, Canada",
    image: runImg,
  },
  {
    year: 2023,
    side: "left",
    title: "Spring Classic",
    description:
      "Returned after injury with a smarter training block and steadier negative splits through the middle miles.",
    time: "55:32",
    location: "Calgary, Canada",
    image: runImg,
  },
  {
    year: 2024,
    side: "right",
    title: "Community Charity Run",
    description:
      "Ran alongside colleagues to support local mental health programs—pace secondary to purpose and presence.",
    time: "49:30",
    location: "Winnipeg, Canada",
    image: runImg,
  },
  {
    year: 2025,
    side: "left",
    title: "City Loop 10K",
    description:
      "Fine-tuned fueling and cadence; chipped within seconds of a long-standing goal on a familiar hometown course.",
    time: "46:32",
    location: "Toronto, Canada",
    image: runImg,
  },
];

/** Table view — matches Figma “My Running Journey” table spec. */
export type TableRow = {
  id: string;
  placeRank: string;
  placeOf: string;
  eventName: string;
  /** Shown in the blue location pill, e.g. "Toronto, Canada" */
  locationPill: string;
  /** e.g. "15 June 2024" */
  dateLabel: string;
  /** HH:MM:SS */
  chipTime: string;
  chipDelta: string;
  officialTime: string;
  detail?: string;
};

export const TABLE_ROWS: TableRow[] = [
  {
    id: "toronto-waterfront",
    placeRank: "#142",
    placeOf: "3,200",
    eventName: "Toronto Waterfront 10K",
    locationPill: "Toronto, Canada",
    dateLabel: "15 June 2024",
    chipTime: "00:54:12",
    chipDelta: "+00:01:51",
    officialTime: "00:56:03",
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
  },
  {
    id: "sea-to-sky",
    placeRank: "#088",
    placeOf: "1,840",
    eventName: "Sea to Sky 10K",
    locationPill: "Vancouver, Canada",
    dateLabel: "12 May 2024",
    chipTime: "00:48:32",
    chipDelta: "+00:01:51",
    officialTime: "00:48:32",
  },
  {
    id: "prairie-pace",
    placeRank: "#210",
    placeOf: "2,100",
    eventName: "Prairie Pace 10K",
    locationPill: "Calgary, Canada",
    dateLabel: "3 August 2024",
    chipTime: "00:48:32",
    chipDelta: "+00:01:51",
    officialTime: "00:48:32",
  },
  {
    id: "capital-run",
    placeRank: "#056",
    placeOf: "960",
    eventName: "Capital Run 10K",
    locationPill: "Ottawa, Canada",
    dateLabel: "21 September 2024",
    chipTime: "00:48:32",
    chipDelta: "+00:01:51",
    officialTime: "00:48:32",
  },
  {
    id: "maple-leaf",
    placeRank: "#134",
    placeOf: "2,400",
    eventName: "Maple Leaf Stride 10K",
    locationPill: "Montreal, Canada",
    dateLabel: "6 October 2024",
    chipTime: "00:48:32",
    chipDelta: "+00:01:51",
    officialTime: "00:48:32",
  },
  {
    id: "northern-lights",
    placeRank: "#067",
    placeOf: "1,120",
    eventName: "Northern Lights 10K",
    locationPill: "Edmonton, Canada",
    dateLabel: "18 November 2024",
    chipTime: "00:48:32",
    chipDelta: "+00:01:51",
    officialTime: "00:48:32",
  },
];

export type FutureRun = {
  title: string;
  metaLine: string;
  image: StaticImageData;
};

export const FUTURE_RUNS: FutureRun[] = [
  {
    title: "Quebec City Marathon 10K",
    metaLine: "Quebec City, QC | September 21, 2025",
    image: runImg,
  },
  {
    title: "Calgary Marathon 10K",
    metaLine: "Calgary, AB | May 25, 2025",
    image: runImg,
  },
  {
    title: "Toronto Waterfront 10K",
    metaLine: "Toronto, ON | October 17, 2025",
    image: runImg,
  },
  {
    title: "Vancouver Sun Run",
    metaLine: "Vancouver, BC | April 21, 2025",
    image: runImg,
  },
];
