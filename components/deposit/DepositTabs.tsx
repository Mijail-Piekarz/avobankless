import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useState } from "react";
import InputAmountWithMaximum from "../general/InputAmountWithMaximum";
import ScoreButton from "../navbar/buttons/ScoreButton";
import SelectInterestRangeInput from "./SelectInterestRate";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="mt-lg space-y-md">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WithdrawTabs({}) {
  const [value, setValue] = useState(0);
  const [yieldProjection, setYieldProjection] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": { justifyContent: "space-evenly" },
          }}
          variant="fullWidth"
        >
          <Tab
            className="text-lg font-extrabold text-black"
            label="Liquidity Providers"
            {...a11yProps(0)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div className="space-y-md w-full">
          <InputAmountWithMaximum placeholder="Amount to deposit" />
          <SelectInterestRangeInput />
        </div>
        <div className="flex justify-between w-full">
          <Typography variant="h6" component="span" className="font-bold">
            Yield Projection
          </Typography>
          <Typography variant="h6" component="span" className="font-bold">
            {yieldProjection}
          </Typography>
        </div>
        <ScoreButton text="Create" twProps="!w-full mt-md" />
      </TabPanel>
    </Box>
  );
}
