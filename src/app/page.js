import CICDPipelineSection from "@/components/cidiSectionComponent/CICDPipelineSection";
import TestResultsSection from "@/components/exampleComponent/TestResultSection";

export default function Home() {
  return (
    <div style={{ justifyContent: 'center', marginTop: '4rem' }}>
      <TestResultsSection />
      <CICDPipelineSection />
    </div>
  );
}
