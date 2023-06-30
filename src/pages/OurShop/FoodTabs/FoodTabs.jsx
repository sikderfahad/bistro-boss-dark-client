import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodTabItem from "../FoodTabItem/FoodTabItem";
const FoodTabs = ({ initIndex }) => {
  const [tabIndex, setTabIndex] = useState(initIndex < 0 ? 0 : initIndex);

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"w-fit mx-auto"}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
          <Tab>OFFERED</Tab>
        </TabList>
        <TabPanel>
          <FoodTabItem type={"salad"}></FoodTabItem>
        </TabPanel>
        <TabPanel>
          <FoodTabItem type={"pizza"}></FoodTabItem>
        </TabPanel>
        <TabPanel>
          <FoodTabItem type={"soup"}></FoodTabItem>
        </TabPanel>
        <TabPanel>
          <FoodTabItem type={"dessert"}></FoodTabItem>
        </TabPanel>
        <TabPanel>
          <FoodTabItem type={"drinks"}></FoodTabItem>
        </TabPanel>
        <TabPanel>
          <FoodTabItem type={"offered"}></FoodTabItem>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FoodTabs;
