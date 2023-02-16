import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

const HTML = await Deno.readFile("./index.html");

console.log("Listening on http://localhost:8000");
serve(async () => {
  return new Response(HTML, {
    headers: {
      "content-type": "text/html",
    },
  });
});