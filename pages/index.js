import Head from 'next/head'
import { FontStyle } from "../components/FontStyle.js";

export default function Home() {
  return (
      <div>
          <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            {(typeof window !== "undefined") && (
              <FontStyle type="h"    />
            )}

                    <h1>Example h1</h1>
                    <h2>Example h2</h2>
                    <h3>Example h3</h3>
                    <h4>Example h4</h4>
                    <h5>Example h5</h5>
                    <h6>Example h6</h6>
          </main>

          <footer>
          </footer>
      </div>
  );
}
