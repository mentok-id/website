import Meta from "@app/components/atoms/Meta";
import React from "react";

export default function Home() {
  return (
    <>
     <Meta />
      <main className="main">
        <h1 className="main__text">MENTOK</h1>
        <div className="main__soon">
          <h3 className="main__soon__coming">COMING</h3>
          <h3 className="main__soon__soon">SOON</h3>
        </div>
      </main>
    </>
  );
}
