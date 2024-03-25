"use client";

import { useEffect } from "react";
import * as Test from "./test";
import * as Svg from "../public";

export default function Home() {
  useEffect(() => {
    Object.keys(Svg).map((key, index) => {
      if (Svg.hasOwnProperty(key)) {
        console.log((Svg as any)[key]);
      }
    })
  }, []);
  return <div>
    <div>
      Test: 
      {
        Object.keys(Test).map((key, index) => {
          if (Test.hasOwnProperty(key)) {
            return <div key={index}>{(Test as any)[key].toString()}</div>     
          }
        })
      }
    </div>
      <div>
        Svgs: 
        {
        Object.keys(Svg).map((key, index) => {
          if (Svg.hasOwnProperty(key)) {
            return <div key={index}>{(Svg as any)[key].toString()}</div>     
          }
        })
      } 
      </div>
  </div>;
}
