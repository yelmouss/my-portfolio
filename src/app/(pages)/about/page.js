import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("./AboutClient"), { ssr: false });

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
