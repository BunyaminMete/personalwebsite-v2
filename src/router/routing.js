import { Route, Routes } from 'react-router-dom';
import Introduce from '../pages/Profile/introduce';
import SectionSet from '../pages/projectsections/sections';
export default function RoutingSection() {
  return (
    <>
      <Routes>
        <Route path="/personalwebsite" element={<SectionSet />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </>
  );
}
