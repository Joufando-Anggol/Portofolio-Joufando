import ReactIcon from "../icons/React";
import HtmlIcon from "../icons/Html";
import CssIcon from "../icons/Css";
import TypescriptIcon from "../icons/Typescript";
import NextJsIcon from "../icons/NextJs";
import JavascriptIcon from "../icons/Javascript";
import TailwindIcon from "../icons/Tailwind";
import BootstrapIcon from "../icons/Bootstrap";
import PostgreIcon from "../icons/Postgresql";
import ExpressIcon from "../icons/Express";
import AwsIcon from "../icons/Aws";
import ReduxIcon from "../icons/Redux";
import RedisIcon from "../icons/Redis";
import GcpIcon from "../icons/Gcp";
import ApolloIcon from "../icons/Apollo";
import Graphql from "../icons/Graphql";
import SupabaseIcon from "../icons/Supabase";
import FirebaseIcon from "../icons/Firebase";
import CloudflareIcon from "../icons/Cloudflare";
import ExpoIcon from "../icons/Expo";
import NodejsIcon from "../icons/Node";
import JwtIcon from "../icons/Jwt";

export default function Services() {
    return (
        <div className="pb-5">
            <p className="heading pt-10">
                My <span className="text-cyan-500">Skills</span>
            </p>
            <div data-aos="flip-right" data-aos-delay="100" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center transform transition-transform duration-300">
                <ReactIcon className="icon-style" />
                <HtmlIcon className="icon-style" />
                <CssIcon className="icon-style" />
                <TypescriptIcon className="icon-style" />
                <NextJsIcon className="icon-style" />
                <JavascriptIcon className="icon-style" />
                <TailwindIcon className="icon-style" />
                <BootstrapIcon className="icon-style" />
                <PostgreIcon className="icon-style" />
                <ExpressIcon className="icon-style" />
                <AwsIcon className="icon-style" />
                <ReduxIcon className="icon-style" />
                <RedisIcon className="icon-style" />
                <GcpIcon className="icon-style" />
                <ApolloIcon className="icon-style" />
                <Graphql className="icon-style" />
                <SupabaseIcon className="icon-style" />
                <FirebaseIcon className="icon-style" />
                <CloudflareIcon className="icon-style" />
                <ExpoIcon className="icon-style" />
                <NodejsIcon className="icon-style" />
                <JwtIcon className="icon-style" />
            </div>
        </div>
    );
}
