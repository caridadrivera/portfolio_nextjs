import Head from "next/head";
import Container from "../components/Container.js";
import Projects from "./projects";
import Main from "../components/Main"
export default function Home() {
  return (
    <Container
      title="Caridad Rivera -- Software Developer, critical thinker"
      description="Building  Next.js and Tailwindcss "
    >
      <Main/>
    </Container>
  );
}