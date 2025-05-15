import { ChartAreaInteractive } from "./components/chart-area-interactive";
import { SectionCards } from "./components/section-cards";

const HomeContainer = () => {
  return (
    <div>
      <SectionCards />
      <div className="px-4 lg:px-6 pt-5">
        <ChartAreaInteractive />
      </div>
    </div>
  );
};

export default HomeContainer;
