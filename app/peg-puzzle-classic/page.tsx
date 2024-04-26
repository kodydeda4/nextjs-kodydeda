import AppLandingPage from "@/components/AppLandingPage";
import { RESUME } from "@/lib/data";

export default function Page() {
  const app = RESUME.apps[0]
  return (<AppLandingPage {...app}/>)
}

