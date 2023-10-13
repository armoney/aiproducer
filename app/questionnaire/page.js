import Questionnaire from "../components/questionnaire";
import { Navigation } from "../components/navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Questionnaire />
      </div>
    </>
  );
}
