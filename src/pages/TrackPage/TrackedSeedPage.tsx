import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import * as RouteHelper from "../../helpers/RouteHelper";
import NotFoundPage from "../NotFound/NotFoundPage";
import "./TrackedSeedPage.scss";

const TrackedSeedPage: React.FC = () => {
  const { id } = useParams();

  if (!RouteHelper.isValidId(id)) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Helmet title={`Tracked Seed: ${id}`} />
    </div>
  );
};

export default TrackedSeedPage;
