import React from "react";
import styles from "./Activity.module.css";
import Summary from "./Summary";
import Financials from "./financials/Financials";
import TeamTasks from "./TeamTasks";
import LatestProjects from "./LatestProjects";
import Performance from "./graphs/Performance";
import ActiveUsers from "./graphs/ActiveUsers";

const Activity = () => {
  return (
    <div className={styles.container}>
      <Summary className={styles.c1} />

      <Financials />
      <ActiveUsers />
      <Performance />
      <TeamTasks />
      <LatestProjects />
    </div>
  );
};

export default Activity;
