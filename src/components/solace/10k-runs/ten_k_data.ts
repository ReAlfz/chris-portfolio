import type { StaticImageData } from "next/image";
import marathon1 from "../../../../public/images/solace/marathon_1.png";
import marathon2 from "../../../../public/images/solace/marathon_2.png";
import marathon3 from "../../../../public/images/solace/marathon_3.png";
import marathon4 from "../../../../public/images/solace/marathon_4.png";
import futureRun1 from "../../../../public/images/solace/future_run_1.png";
import futureRun2 from "../../../../public/images/solace/future_run_2.png";
import futureRun3 from "../../../../public/images/solace/future_run_3.png";
import futureRun4 from "../../../../public/images/solace/future_run_4.png";

/** Table view — matches Figma “My Running Journey” table spec. */
export type JourneyData = {
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
  detail: string;
  image: StaticImageData;
  year: number,
};

export const RUN_JOURNEY: JourneyData[] = [
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
    image: marathon1,
    year: 2020,
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
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
    image: marathon2,
    year: 2021,
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
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
    image: marathon3,
    year: 2022,
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
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
    image: marathon4,
    year: 2023,
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
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
    image: marathon3,
    year: 2024,
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
    detail:
      "One of Canada's signature summer races, known for its flat lakeside course and huge community turnout. A fast route built for chasing personal bests.",
    image: marathon4,
    year: 2025,
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
    image: futureRun1,
  },
  {
    title: "Calgary Marathon 10K",
    metaLine: "Calgary, AB | May 25, 2025",
    image: futureRun2,
  },
  {
    title: "Toronto Waterfront 10K",
    metaLine: "Toronto, ON | October 17, 2025",
    image: futureRun3,
  },
  {
    title: "Vancouver Sun Run",
    metaLine: "Vancouver, BC | April 21, 2025",
    image: futureRun3,
  },
];
