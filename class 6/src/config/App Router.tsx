import { BrowserRouter, Route, Routes } from "react-router-dom";
import AskQuestions from "../pages/Ask Question";
import AllQuestions from "../pages/All Question";
import DetailQuestion from "../pages/Detail Question";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ask" element={<AskQuestions />} />
          <Route path="/ask/:id" element={<DetailQuestion />} />
          <Route path="/" element={<AllQuestions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
