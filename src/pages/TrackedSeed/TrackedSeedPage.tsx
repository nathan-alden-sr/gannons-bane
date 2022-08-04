import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { isValidId } from "../../helpers/IdHelper";
import NotFoundPage from "../NotFound/NotFoundPage";
import "./TrackedSeedPage.scss";

const TrackedSeedPage: React.FC = () => {
  const { id } = useParams();

  if (!isValidId(id)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet title={`Tracked Seed: ${id}`} />
      <div></div>
    </>
  );
};

export default TrackedSeedPage;
